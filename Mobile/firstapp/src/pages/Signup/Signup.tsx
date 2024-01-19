import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonAlert } from "@ionic/react";
import { calendar, call, camera, location, lockClosed, mail, person } from 'ionicons/icons';
import './Signup.scss';
import { CameraResultType, Camera } from "@capacitor/camera";
import { useState } from "react";
import { useHistory } from "react-router";


const Signup: React.FC = () => {

    const [nom, setNom] = useState('Rakotoarison');
    const [prenom, setPrenom] = useState('Tiavina Gael');
    const [dateNaissance, setDateNaissance] = useState(new Date('2003-08-08').toISOString().substring(0, 10));
    const [adresse, setAdresse] = useState('Lot H 121 TER A Alasora');
    const [email, setEmail] = useState('kelydoda724@gmail.com');
    const [telephone, setTelephone] = useState('+261326470822');
    const [motDePasse, setMotDePasse] = useState('gael');
    const [confirmMotDePasse, setConfirmMotDePasse] = useState('gael');
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [showAlertError, setShowAlertError] = useState(false);
    const history = useHistory();

    const handleNomChange = (e: any) => {
        setNom(e.detail.value);
    };

    const handlePrenomChange = (e: any) => {
        setPrenom(e.detail.value);
    };

    const handleDateNaissanceChange = (e: any) => {
        setDateNaissance(e.detail.value);
    };

    const handleAdresseChange = (e: any) => {
        setAdresse(e.detail.value);
    };

    const handleEmailChange = (e: any) => {
        setEmail(e.detail.value);
    };

    const handleTelephoneChange = (e: any) => {
        setTelephone(e.detail.value);
    };

    const handleMotDePasseChange = (e: any) => {
        setMotDePasse(e.detail.value);
    };

    const handleConfirmMotDePasseChange = (e: any) => {
        setConfirmMotDePasse(e.detail.value);
    };


    const openCamera = async () => {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleAlertSuccessClose = () => {
        setShowAlertSuccess(false);
    };

    const handleAlertErrorClose = () => {
        setShowAlertError(false);
    };

    const handleAlertButtonClick = () => {
        history.push('/login');
      };
    

    const handleSubmit = async () => {
        const formData = {
            idprofile: 4,
            email: email,
            mdp: motDePasse,
            nom: nom,
            prenom: prenom,
            addresse: adresse,
            telephone: telephone,
            dtn: dateNaissance,
        };

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            const message = data['message'];
            console.log(message);
            if (message == 'success') {
                setShowAlertSuccess(true);
            }
            else {
                setShowAlertError(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen className="signup">
                {/*  */}
                <IonAlert
                    isOpen={showAlertSuccess}
                    onDidDismiss={handleAlertSuccessClose}
                    header={'Success'}
                    message={'Your account was created successfully'}
                    buttons={[
                        {
                            text: 'Go to Login',
                            handler: handleAlertButtonClick, // Handle the click event here
                        }
                    ]}
                />
                <IonAlert
                    isOpen={showAlertError}
                    onDidDismiss={handleAlertErrorClose}
                    header={'Error'}
                    message={'There was a problem creating your account'}
                    buttons={['Try Again']}
                />
                {/*  */}
                <div id="signup-page">
                    <div id="signup-title">
                        <h1>Creer un compte</h1>
                    </div>
                    <div id="signup-form-container">
                        <IonInput className="signup" type="text" labelPlacement="stacked" label="Nom" value={nom} onIonChange={handleNomChange}>
                            <IonIcon slot="start" icon={person} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="text" labelPlacement="stacked" label="Prenom" value={prenom} onIonChange={handlePrenomChange}>
                            <IonIcon slot="start" icon={person} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="date" labelPlacement="stacked" label="Date de naissance" value={dateNaissance} onIonChange={handleDateNaissanceChange}>
                            <IonIcon slot="start" icon={calendar} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="text" labelPlacement="stacked" label="Addresse" value={adresse} onIonChange={handleAdresseChange}>
                            <IonIcon slot="start" icon={location} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="email" labelPlacement="stacked" label="Email" value={email} onIonChange={handleEmailChange}>
                            <IonIcon slot="start" icon={mail} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="tel" labelPlacement="stacked" label="Telephone" value={telephone} onIonChange={handleTelephoneChange}>
                            <IonIcon slot="start" icon={call} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="password" labelPlacement="stacked" label="Mot de passe" value={motDePasse} onIonChange={handleMotDePasseChange}>
                            <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonInput className="signup" type="password" labelPlacement="stacked" label="Confirmer le mot de passe" value={confirmMotDePasse} onIonChange={handleConfirmMotDePasseChange}>
                            <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
                        </IonInput>
                        <IonButton expand="full" onClick={openCamera} >
                            <IonIcon icon={camera} slot="start" />
                            Ajouter un photo de profil
                        </IonButton>
                        <IonButton id="signup-form-submit-button" color="dark" onClick={handleSubmit}>VALIDER</IonButton>
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