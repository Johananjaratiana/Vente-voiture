import { IonImg } from '@ionic/react';
import './AnnonceBox.scss';
import { useHistory } from 'react-router-dom';


interface AnnonceBoxProps {
    imageUrl: string;
    title: string;
    date: string;
    status: number;
};

const data = [{ "color": "#f39c12", "text": "EN ATTENTE" }, { "color": "#2ecc71", "text": "EN VENTE" }, { "color": "#e74c3c", "text": "VENDU" },]
const AnnonceBox: React.FC<AnnonceBoxProps> = ({ imageUrl, title, date, status }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/annonce/detail');
    };
    return (
        <div id="annonces-box" onClick={handleClick}>
            <div id="annonces-box-status" style={{ backgroundColor: data[status].color }}>{data[status].text}</div>
            <div id="annonces-box-content">
                <div id="annonces-box-image">
                    <IonImg src={imageUrl}></IonImg>
                </div>
                <div id="annonces-box-description">
                    <h3>{title}</h3>
                    <p>Mis en vente le {date}</p>
                </div>
            </div>
        </div>
    );
};

export default AnnonceBox;