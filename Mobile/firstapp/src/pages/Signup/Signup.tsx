import { IonButton, IonContent, IonIcon, IonInput, IonPage } from "@ionic/react";
import { calendar, call, camera, location, lockClosed, mail, person } from 'ionicons/icons';
import './Signup.scss';
import { CameraResultType, Camera } from "@capacitor/camera";


const Signup: React.FC = () => {
    const openCamera = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
            const imageUrl = `data:image/jpeg;base64,${image.base64String}`;
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <IonPage>
            <IonContent fullscreen className="signup">
                <div id="signup-page">
                    <div id="signup-title">
                        <h1>Creer un compte</h1>
                    </div>
                    <div id="signup-form-container">
                        <form action="/login">
                            <IonInput className="signup" type="text" labelPlacement="stacked" label="Nom">
                                <IonIcon slot="start" icon={person} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="text" labelPlacement="stacked" label="Prenom">
                                <IonIcon slot="start" icon={person} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="date" labelPlacement="stacked" label="Date de naissance">
                                <IonIcon slot="start" icon={calendar} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="text" labelPlacement="stacked" label="Addresse">
                                <IonIcon slot="start" icon={location} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="email" labelPlacement="stacked" label="Email">
                                <IonIcon slot="start" icon={mail} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="tel" labelPlacement="stacked" label="Telephone">
                                <IonIcon slot="start" icon={call} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="password" labelPlacement="stacked" label="Mot de passe">
                                <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonInput className="signup" type="password" labelPlacement="stacked" label="Confirmer le mot de passe">
                                <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                            </IonInput>
                            <IonButton expand="full"  onClick={openCamera} >
                                <IonIcon icon={camera} slot="start"/>
                                Ajouter un photo de profil
                            </IonButton>
                            <IonButton id="signup-form-submit-button" color="dark" type="submit">VALIDER</IonButton>
                        </form>
                    </div>
                    <div id="signup-with-account">
                        <p>Deja membre ? <a href="/login">Se connecter</a></p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Signup;