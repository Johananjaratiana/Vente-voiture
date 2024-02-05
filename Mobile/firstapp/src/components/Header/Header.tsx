import { IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';
import './Header.scss';

interface HeaderProps {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    const notificationCount = 9;

    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>{title}</IonTitle>
                <div slot="end" id="notification-icon-div">
                    <a href="/notification">
                        <IonIcon mode='ios' icon={notificationsOutline} id="notif-icon" size="large" />
                    </a>
                </div>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;