import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonAlert } from "@ionic/react";
import { lockClosed, mail } from 'ionicons/icons';
import './Login.scss';
import { useState } from "react";
import { Storage } from "@ionic/storage";
import { useHistory } from 'react-router-dom';

const store = new Storage();
await store.create();

const Login: React.FC = () => {

    const [email, setEmail] = useState('kelydoda724@gmail.com');
    const [password, setPassword] = useState('gael');
    const [showAlert, setShowAlert] = useState(false);
    const history = useHistory();

    const handleEmailChange = (e: any) => {
        setEmail(e.detail.value);
    };

    const handlePasswordChange = (e: any) => {
        setPassword(e.detail.value);
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    const handleSubmit = async () => {
        const formData = {
            email: email,
            mdp: password,
        };

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            const message = data['message'];
            if (message == 'error') {
                setShowAlert(true);
            }
            else {
                const token = data['data']['token'];
                await store.set('token', token);
                history.push('/annonces')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <IonPage>
            <IonContent fullscreen className="login">
                {/*  */}
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={handleAlertClose}
                    header={'Error'}
                    message={'Invalid Email or Password'}
                    buttons={['Try Again']}
                />
                {/*  */}
                <div id="login-page">
                    <div id="login-title">
                        <h1>Se connecter</h1>
                    </div>
                    <div id="login-form-container">
                        <IonInput className="login" type="email" labelPlacement="stacked" label="Email" onIonChange={handleEmailChange} value={email}>
                            <IonIcon slot="start" icon={mail} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="login" type="password" labelPlacement="stacked" label="Mot de passe" onIonChange={handlePasswordChange} value={password}>
                            <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonButton id="login-form-submit-button" color="dark" onClick={handleSubmit}>VALIDER</IonButton>
                    </div>
                    <div id="login-no-account">
                        <p>Pas encore membre ? <a href="/signup">Creer un compte</a></p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Login;