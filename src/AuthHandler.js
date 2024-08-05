import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import iAx from "./ConfigAXIOS";
import '../src/css/Styles.css';

const AuthHandler = () => {
    const navigate = useNavigate();

    async function valToken(res) {
        try {
            const data = {
                accessToken: res.accessToken,
            };
            const rta = await iAx.post('/valUsu', JSON.stringify(data));
            console.log("rta ====== " + JSON.stringify(rta));
            console.log("data ====== " + JSON.stringify(rta.data));
            console.log("status ====== " + rta.status);
            console.log("ch ====== " + rta.config.headers);

            if (rta.data.msg === "ER") {
                alert(rta.data.info);
                navigate('/AuthError');
            } else {
                console.log("======> ", rta.data.info);
                navigate('/home');
            }
        } catch (error) {
            console.log("ERROR: " + error.message);
            navigate('/AuthError');
        }
    }

    const responseFacebook = (response) => {
        console.log(response);
        if (response.status !== 'unknown') {
            console.log("name: ", response.name);
            console.log("email: ", response.email);
            valToken(response);
        } else {
            console.log("No está autorizado para acceder a la app de Facebook");
            navigate('/AuthError');
        }
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Bienvenido a tu Biblioteca libro feliz</h1>
            <div className="facebook-login-container">
                <FacebookLogin
                    appId="842491001161623"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fa-facebook"
                    cssClass="facebook-login-button"
                />
            </div>
        </div>
    );
}

export default AuthHandler;
