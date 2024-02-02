import { IonContent, IonPage } from '@ionic/react';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import NotificationBox from '../../components/Notification/NotificationBox';
import { useNotification } from './NotificationContext';
import './Notification.scss';
import { useEffect, useState } from 'react';

const Notification: React.FC = () => {
    const { notification } = useNotification();
    const [notifications, setNotifications] = useState<any[]>([]);
    useEffect(() => {
        if (notification) {
            setNotifications(prevNotifications => [...prevNotifications, notification]);
            console.log(notifications);
        }
    }, [notification]);
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Notification" />
                <IonContent fullscreen className="notification ion-padding">
                    <NotificationBox personName="Rakoto Koto" date="12/12/2023 a 20:00" imageUrl="https://picsum.photos/id/1/200/200" />
                    <NotificationBox personName="Rajean Jean" date="12/12/2023 a 20:00" imageUrl="https://picsum.photos/id/64/200/200" />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Notification;