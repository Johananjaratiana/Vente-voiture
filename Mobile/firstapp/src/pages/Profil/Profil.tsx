import {
    IonContent,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonPage
} from '@ionic/react';
import { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import './Profil.scss' ;
import { Storage } from '@ionic/storage';


const store = new Storage();
await store.create();

interface UserProfile {
    id: number;
    email: string;
    mdp: string;
    nom: string;
    dtn: string;
    addresse: string;
    telephone: string;
    idprofile: number;
    prenom: string;
}

interface UserImage {
    id: number;
    image: string;
    idUsers: number;
}


const Profil: React.FC = () => {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [userImages, setUserImages] = useState<UserImage | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const idUser = await store.get('idUser');
                const response = await fetch('http://localhost:8080/api/users/'+idUser);
                const userData = await response.json();
                setUserData(userData['data']);
                const imageResponse = await fetch('http://localhost:8080/api/pdps/users/'+idUser);
                const userImagesData = await imageResponse.json();
                setUserImages(userImagesData['data'][0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Profil" />
                <IonContent className="ion-padding">
                    {userData && userImages && (
                        <>
                            <IonImg
                                src={userImages.image}
                                alt="User Profile"
                                className="ion-margin-top ion-margin-bottom userimage"
                            />

                            <IonList lines="full">
                                <IonItem>
                                    <IonLabel position="stacked">Nom</IonLabel>
                                    <IonLabel>{userData.nom}</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="stacked">Prenom</IonLabel>
                                    <IonLabel>{userData.prenom}</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="stacked">Date de naissance</IonLabel>
                                    <IonLabel>{userData.dtn}</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="stacked">Addresse</IonLabel>
                                    <IonLabel>{userData.addresse}</IonLabel>
                                </IonItem>

                                <IonItem>
                                    <IonLabel position="stacked">Telephone</IonLabel>
                                    <IonLabel>{userData.telephone}</IonLabel>
                                </IonItem>
                            </IonList>
                        </>
                    )}
                </IonContent>

            </IonPage >
        </>
    );
};

export default Profil;