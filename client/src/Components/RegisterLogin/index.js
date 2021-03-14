import React from 'react';

const RegisterLogin = () => {
    return (
        <div className="login_wrapper">
            <div className="login_container">
                <h2>Login Your Account</h2>
                <form className="login_form">
                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    />
                    <input
                    type="submit"
                    name="submit"
                    />
                </form>
                <div>
                    <span><a href="/">Forgot Password?</a></span>
                    <span><a href="/">Create An Account</a></span>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;