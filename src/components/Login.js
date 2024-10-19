import React, { useEffect } from 'react';
import img from "../components/login_assets/store1.jpg"
import './Login.css';

function Login() {
    useEffect(() => {
        const loginAcessRegister = document.getElementById('loginAccessRegister');
        const buttonRegister = document.getElementById('loginButtonRegister');
        const buttonAccess = document.getElementById('loginButtonAccess');

        const passwordAccess = (loginPass, loginEye) => {
            const input = document.getElementById(loginPass);
            const iconEye = document.getElementById(loginEye);

            iconEye.addEventListener('click', () => {
                input.type = input.type === 'password' ? 'text' : 'password';
                iconEye.classList.toggle('ri-eye-fill');
                iconEye.classList.toggle('ri-eye-off-fill');
            });
        };

        passwordAccess('password', 'loginPassword');
        passwordAccess('passwordCreate', 'loginPasswordCreate');

        buttonRegister.addEventListener('click', () => {
            loginAcessRegister.classList.add('active');
        });

        buttonAccess.addEventListener('click', () => {
            loginAcessRegister.classList.remove('active');
        });

        // Cleanup event listeners on component unmount
        return () => {
            buttonRegister.removeEventListener('click', () => {});
            buttonAccess.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <div>
            <svg className="login__blob" viewBox="0 0 566 840" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha">
                    <path d="M342.407 73.6315C388.53 56.4007 394.378 17.3643 391.538 0H566V840H0C14.5385 834.991 100.266 804.436 77.2046 707.263C49.6393 591.11 115.306 518.927 176.468 488.873C363.385 397.026 156.98 302.824 167.945 179.32C173.46 117.209 284.755 95.1699 342.407 73.6315Z"/>
                </mask>
                <g mask="url(#mask0)">
                    <image className="login__img" href={img} x="0" y="0" width="566" height="840" />
                </g>
            </svg>

            <div className="login container grid" id="loginAccessRegister">
                <div className="login__access">
                    <h1 className="login__title">Log in to your account.</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="login__form">
                        <div className="login__content grid">
                            <div className="login__box">
                                <input type="email" id="email" required placeholder=" " className="login__input" />
                                <label htmlFor="email" className="login__label">Email</label>
                            </div>
                            <div className="login__box">
                                <input type="password" id="password" required placeholder=" " className="login__input" />
                                <label htmlFor="password" className="login__label">Password</label>
                                <i id="loginPassword" className="ri-eye-off-fill login__icon"></i>
                            </div>
                        </div>
                        <a href="#" className="login__forgot">Forgot your password?</a>
                        <button type="submit" className="login__button">Login</button>
                        <p className="login__switch">
                            Don't have an account? 
                            <button type="button" id="loginButtonRegister" className="switch-button">Create Account</button>
                        </p>
                    </form>
                </div>

                <div className="login__register active">
                    <h1 className="login__title">Create new account.</h1>
                    <form onSubmit={(e) => e.preventDefault()} className="login__form">
                        <div className="login__content grid">
                            <div className="login__box">
                                <input type="text" id="names" required placeholder=" " className="login__input" />
                                <label htmlFor="names" className="login__label">Names</label>
                            </div>
                            <div className="login__box">
                                <input type="text" id="surnames" required placeholder=" " className="login__input" />
                                <label htmlFor="surnames" className="login__label">Surnames</label>
                            </div>
                            <div className="login__box">
                                <input type="email" id="emailCreate" required placeholder=" " className="login__input" />
                                <label htmlFor="emailCreate" className="login__label">Email</label>
                            </div>
                            <div className="login__box">
                                <input type="password" id="passwordCreate" required placeholder=" " className="login__input" />
                                <label htmlFor="passwordCreate" className="login__label">Password</label>
                                <i id="loginPasswordCreate" className="ri-eye-off-fill login__icon"></i>
                            </div>
                        </div>
                        <button type="submit" className="login__button">Create account</button>
                        <p className="login__switch">
                            Already have an account? 
                            <button type="button" id="loginButtonAccess" className="switch-button">Log In</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
