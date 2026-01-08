import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../../UserContext';

function Auth() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isDarkMode, login, signup } = useUser();

    // Determine initial mode from query params
    const queryParams = new URLSearchParams(location.search);
    const initialMode = queryParams.get('mode') === 'signup';

    const [isSignup, setIsSignup] = useState(initialMode);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const mode = new URLSearchParams(location.search).get('mode');
        setIsSignup(mode === 'signup');
        setError(''); // Clear errors on mode switch
    }, [location.search]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isSignup) {
                if (formData.password !== formData.confirmPassword) {
                    setError("Passwords do not match");
                    setLoading(false);
                    return;
                }

                const result = await signup({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password
                });

                if (result.success) {
                    console.log("Signup successful");
                    // Optionally login immediately or redirect to login
                    // For now, let's switch to login mode or log them in directly if the context supports it
                    // The context signup function returns success but doesn't set auth state by default
                    // Let's try to login automatically or ask user to login
                    const loginResult = await login({ email: formData.email, password: formData.password });
                    if (loginResult.success) {
                        navigate('/dashboard');
                    } else {
                        navigate('/auth?mode=login');
                    }
                } else {
                    setError(result.message);
                }
            } else {
                const result = await login({
                    email: formData.email,
                    password: formData.password
                });

                if (result.success) {
                    console.log("Login successful");
                    navigate('/dashboard');
                } else {
                    setError(result.message);
                }
            }
        } catch (err) {
            console.error("Auth error:", err);
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`auth-soft-ui-root ${isDarkMode ? 'theme-night' : 'theme-day'}`}>
            <div className="auth-soft-ui-container">
                <div className="auth-3d-card">
                    {/* Left Pane - Form */}
                    <div className="auth-form-pane">
                        <h1 className="auth-3d-title">{isSignup ? 'Sign Up' : 'Login'}</h1>

                        {error && <div className="auth-error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                        <form className="auth-soft-form" onSubmit={handleSubmit}>
                            {isSignup && (
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <div className="soft-form-group" style={{ flex: 1 }}>
                                        <label className="soft-label">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="soft-input-3d"
                                            required
                                        />
                                    </div>
                                    <div className="soft-form-group" style={{ flex: 1 }}>
                                        <label className="soft-label">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="soft-input-3d"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="soft-form-group">
                                <label className="soft-label">{isSignup ? 'Email' : 'Email'}</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="soft-input-3d"
                                    required
                                />
                            </div>

                            <div className="soft-form-group">
                                <label className="soft-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="soft-input-3d"
                                    required
                                />
                            </div>

                            {isSignup && (
                                <div className="soft-form-group">
                                    <label className="soft-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="soft-input-3d"
                                        required
                                    />
                                </div>
                            )}

                            <button type="submit" className="soft-3d-button" disabled={loading}>
                                {loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Login')}
                            </button>
                        </form>

                        <div className="auth-toggle-text">
                            {isSignup ? (
                                <p>Already have an account? <button className="auth-link-btn" onClick={() => navigate('/auth?mode=login')}>Login</button></p>
                            ) : (
                                <p>Don't have an account? <button className="auth-link-btn" onClick={() => navigate('/auth?mode=signup')}>Sign Up</button></p>
                            )}
                        </div>
                    </div>

                    {/* Right Pane - 3D Visual */}
                    <div className="auth-visual-pane">
                        <div className="user-3d-icon">
                            <div className="user-icon-head"></div>
                            <div className="user-icon-body"></div>
                        </div>
                    </div>
                </div>

                {/* Back to Home */}
                <button className="back-home-link" onClick={() => navigate('/')}>
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}

export default Auth;
