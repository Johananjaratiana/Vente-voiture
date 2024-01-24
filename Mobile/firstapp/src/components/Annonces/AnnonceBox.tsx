import { IonImg } from '@ionic/react';
import './AnnonceBox.scss';
import { useHistory } from 'react-router-dom';


interface AnnonceBoxProps {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    status: number;
};

interface StatusData {
    [key: string]: { color: string; text: string };
}

const data: StatusData = {
    "-10": { color: "#e74c3c", text: "REFUSE" },
    "0": { color: "#f39c12", text: "EN ATTENTE" },
    "10": { color: "#2ecc71", text: "EN VENTE" },
    "20": { color: "#3498db", text: "VENDU" },
};
const AnnonceBox: React.FC<AnnonceBoxProps> = ({ id, imageUrl, title, date, status }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/annonce/detail/' + id);
    };
    return (
        <div id="annonces-box" onClick={handleClick}>
            <div id="annonces-box-status" style={{ backgroundColor: data[status.toString()].color }}>{data[status.toString()].text}</div>
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