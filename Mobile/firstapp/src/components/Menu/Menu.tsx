import { IonContent, IonHeader, IonIcon, IonMenu, IonTitle, IonToolbar } from '@ionic/react';
import { add, list, logOut } from 'ionicons/icons';
import './Menu.scss';


const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent id="menu-content" className="ion-padding">
                <div id="menu-page">
                    <ul>
                        <li>
                            <a href="/annonces">
                                <IonIcon icon={list} />
                                Liste des annonces
                            </a>
                        </li>
                        <li>
                            <a href="/annonce/ajout">
                                <IonIcon icon={add} />
                                Ajouter une annonce
                            </a>
                        </li>
                        <li>
                            <a href="/login">
                                <IonIcon icon={logOut} />
                                Se deconnecter
                            </a>
                        </li>
                    </ul>
                </div>
            </IonContent>
        </IonMenu>
    );
};
export default Menu;