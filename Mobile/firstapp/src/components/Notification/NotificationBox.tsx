import { IonImg } from '@ionic/react';
import './NotificationBox.scss'

interface NotificationBoxProps {
    personName: string;
    date: string;
    // imageUrl: string;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ personName, date }) => {
    // const imageStyle = {
    //     borderRadius: '50%',
    //     overflow: 'hidden',
    //     width: '50px',
    //     height: '50px',
    //     marginRight: '10px'
    //   };
    return (
        <div id="notification-box">
            {/* <div id="notification-image">
                <IonImg  style={imageStyle} src={imageUrl} alt="Profil" className="notification"></IonImg>
            </div> */}
            <div id="notification-text">
                <p><span id="notification-person">{personName}</span> vous a envoye un message 
                    {/*le <span id="notification-date">{date}</span> */}
                </p>
            </div>
        </div>
    );
};

export default NotificationBox;