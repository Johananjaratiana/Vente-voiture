import { IonButton, IonContent, IonIcon, IonInput, IonPage } from "@ionic/react";
import { lockClosed, mail } from 'ionicons/icons';
import './Login.scss';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="login">
                <div id="login-page">
                    <div id="login-title">
                        <h1>Se connecter</h1>
                    </div>
                    <div id="login-form-container">
                        <form action="/annonces">
                            <IonInput className="login" type="email" labelPlacement="stacked" label="Email">
                                <IonIcon slot="start" icon={mail} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="login" type="password" labelPlacement="stacked" label="Mot de passe">
                                <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonButton id="login-form-submit-button" color="dark" type="submit">VALIDER</IonButton>
                        </form>
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