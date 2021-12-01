import { useContext, useState } from "react";
import React from "react";
import { authContext, useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import '../forgot/ForgotPasswordPage.css'

export default function ForgotPasswordPage() {

    const [email, setEmail] = useState("");
    const { forgotPassword } = useContext(authContext);

    return (
        <>
            <div className="bodyRegister">
                <div className="containerDi">
                    <Link to="/login">
                        <label
                            htmlFor="show"
                            className="close-btn fas fa-times"
                            title="close"
                        ></label>
                    </Link>

                    <div className="text">Забыл пароль</div>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();

                            try {
                                await forgotPassword(email);
                              
                            } catch (error) {
                                console.log(error.message);
                        
                            }
                        }}
                    >
                        <div className="data">
                            <label>Электронная почта или Телефон</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                type="email"
                            />
                        </div>

                        <div className="btn">
                            <div className="inner"></div>

                            <button type="submit"> Потвердить</button>
                        </div>
                        <span className="or">или</span>

                        <div className="btn">
                            <div className="inner"></div>
                            <Link to="/login">
                                <button type="submit">Выйти</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}