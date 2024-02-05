import { IonContent, IonIcon, IonMenu } from '@ionic/react';
import { Storage } from '@ionic/storage';
import { add, list, logOut, personCircle,notificationsOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { WEB_SERVICE_URL } from '../../constants';
import './Menu.scss';

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

const Menu: React.FC = () => {

    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [userImages, setUserImages] = useState<UserImage | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const store = new Storage();
                await store.create();
                const idUser = await store.get('idUser');
                const response = await fetch(WEB_SERVICE_URL + '/users/' + idUser);
                const userData = await response.json();
                setUserData(userData['data']);
                const imageResponse = await fetch(WEB_SERVICE_URL + '/pdps/users/' + idUser);
                const userImagesData = await imageResponse.json();
                setUserImages(userImagesData['data'][0]);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <IonMenu contentId="main-content">
            <IonContent id="menu-content" className="ion-no-padding">
                {userData && userImages && (
                    <>
                        <div
                            id="div-userimage"
                            style={{
                                backgroundImage: `url(${userImages.image})`,
                            }}
                        ></div>
                        <div id="div-username">
                            <h3>{userData.nom} {userData.prenom}</h3>
                        </div>
                    </>
                )}
                <div id="menu-page">
                    <div id="menu-item-a">
                        <a href="/annonces">
                            <div id="menu-item">
                                <div id="menu-item-icon">
                                    <IonIcon className="micon" icon={list} size="large"></IonIcon>
                                </div>
                                <div id="menu-item-name">
                                    <h5>Mes annonces</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="menu-item-a">
                        <a href="/annonce/ajout">
                            <div id="menu-item">
                                <div id="menu-item-icon">
                                    <IonIcon className="micon" icon={add} size="large"></IonIcon>
                                </div>
                                <div id="menu-item-name">
                                    <h5>Ajouter une annonce</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="menu-item-a">
                        <a href="/profil">
                            <div id="menu-item">
                                <div id="menu-item-icon">
                                    <IonIcon className="micon" icon={personCircle} size="large"></IonIcon>
                                </div>
                                <div id="menu-item-name">
                                    <h5>Mon profil</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="menu-item-a">
                        <a href="/notification">
                            <div id="menu-item">
                                <div id="menu-item-icon">
                                    <IonIcon className="micon" icon={notificationsOutline} size="large"></IonIcon>
                                </div>
                                <div id="menu-item-name">
                                    <h5>Notifications</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="menu-item-a">
                        <a href="/login">
                            <div id="menu-item">
                                <div id="menu-item-icon">
                                    <IonIcon className="micon" icon={logOut} size="large"></IonIcon>
                                </div>
                                <div id="menu-item-name">
                                    <h5>Se deconnecter</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </IonContent>
        </IonMenu>
    );
};
export default Menu;