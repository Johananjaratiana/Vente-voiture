import { IonAlert,IonAccordion, IonAccordionGroup, IonButton, IonCol, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { checkmarkDoneCircleOutline, createOutline, trashOutline, closeCircleOutline } from 'ionicons/icons';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import './DetailAnnonce.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Storage } from '@ionic/storage';
import { useHistory } from 'react-router-dom';


const store = new Storage();
await store.create();

interface AnnounceData {
    id: number;
    version: string;
    description: string;
    status: number;
    idUsers: number;
    niveauTypeAnnonce: number;
    etatTransmission: number;
    commissionTypeAnnonce: number;
    etatElectronique: number;
    idCouleur: number;
    nbPlace: number;
    kmEffectue: number;
    consommation: number;
    idModele: number;
    idTypeAnnonce: number;
    idMarque: number;
    prixVente: number;
    nbVitesse: number;
    numero: string;
    idTransmission: number;
    idTypeMoteur: number;
    puissance: number;
    dateAnnonce: string;
    idTaille: number;
    idUsage: number;
    idEnergie: number;
    rgbCouleur: string;
    etatSuspension: number;
    nomTypeAnnonce: string;
    etatMoteur: number;
    nomCouleur: string;
    nomEnergie: string;
    nomTypeMoteur: string;
    nomUsers: string;
    etatCarrosserie: number;
    emailUsers: string;
    etatPneu: number;
    nomUsage: string;
    etatTableauBord: number;
    telephoneUsers: string;
    nomTransmission: string;
    nomModele: string;
    prenomUsers: string;
    etatSiege: number;
    nomMarque: string;
    etatFreinage: number;
    nomTaille: string;
}

interface PhotoAnnonce {
    id: number;
    idAnnonce: number;
    image: string;
}

interface StatusData {
    [key: string]: { color: string; text: string };
}

const data: StatusData = {
    "-10": { color: "#e74c3c", text: "REFUSE" },
    "0": { color: "#f39c12", text: "EN ATTENTE" },
    "10": { color: "#2ecc71", text: "EN VENTE" },
    "20": { color: "#3498db", text: "VENDU" },
};

const DetailAnnonce: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const [announceData, setAnnounceData] = useState<AnnounceData | null>(null);
    const [photoAnnonces, setPhotoAnnonces] = useState<PhotoAnnonce[]>([]);
    const [showDeleteError, setShowDeleteError] = useState(false);
    const history = useHistory();

    const handleDeleteAlertClose = () => {
        setShowDeleteError(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v_annonce_complets/' + id);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: AnnounceData = await response.json();
                setAnnounceData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchPhotoAnnonces = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/photo_annonces/annonce/${id}`);
                const data = await response.json();
                setPhotoAnnonces(data['data']);
            } catch (error) {
                console.error('Error fetching photo annonces:', error);
            }
        };

        fetchPhotoAnnonces();
    }, [id]);

    const handleButtonClick = async () => {
        try {
            if (!announceData) {
                return;
            }
            if (announceData.status == 10) {
                announceData.status = 20;
            }
            else {
                announceData.status = 10;
            }
            const token = await store.get('token');
            const response = await fetch('http://localhost:8080/api/annonces/' + announceData?.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(announceData),
            });
            const data = await response.json();
            const message = data['message'];
            if (message == 'error') {
                throw new Error();
            }
            setAnnounceData({ ...announceData, status: announceData.status });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const deleteAnnonce = async () => {
        try {
            const token = await store.get('token');
            const response = await fetch('http://localhost:8080/api/annonces/' + announceData?.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(announceData),
            });
            const data = await response.json();
            const message = data['message'];
            if (message == 'error') {
                throw new Error();
            }
            history.push('/annonces');
        } catch (error) {
            setShowDeleteError(true)
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Detail annonce" />
                <IonContent className="ion-no-padding">
                    <IonAlert
                        isOpen={showDeleteError}
                        onDidDismiss={handleDeleteAlertClose}
                        header={'Error'}
                        message={'There was an error deleting your annonce'}
                        buttons={['Try Again']}
                    />
                    <Swiper id="slide"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {photoAnnonces.map((photo) => (
                            <SwiperSlide>
                                <IonImg src={photo.image}></IonImg>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {
                        announceData && (
                            <>
                                <div className="detail">
                                    <div className="title">
                                        {announceData?.nomMarque} {announceData?.nomModele}
                                    </div>
                                    <div className="state" style={{ backgroundColor: data[announceData.status.toString()].color }}>{data[announceData.status.toString()].text}</div>
                                </div>
                                <div className="actions">
                                    <div className="mis-en-vente">
                                        Mis en vente le {announceData?.dateAnnonce}
                                    </div>
                                    <div className="action">
                                        <IonButton
                                            expand="full"
                                            color={announceData && announceData.status === 20 ? 'danger' : 'success'}  // Change color based on status
                                            onClick={handleButtonClick}
                                        >
                                            <IonIcon slot="start" icon={announceData && announceData.status === 20 ? closeCircleOutline : checkmarkDoneCircleOutline}></IonIcon>
                                            {announceData && announceData.status === 20 ? 'Annulation de la vente' : 'Marquer comme vendu'}  {/* Change text based on status */}
                                        </IonButton>
                                    </div>
                                </div>
                                <IonAccordionGroup multiple>
                                    <IonAccordion value="first">
                                        <IonItem slot="header" color="light">
                                            <IonLabel>Informations generales</IonLabel>
                                        </IonItem>
                                        <div className="ion-padding" slot="content">
                                            <table>
                                                <tr>
                                                    <td className="tdlabel">Marque</td>
                                                    <td>{announceData?.nomMarque}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Modele</td>
                                                    <td>{announceData?.nomModele}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Version</td>
                                                    <td>{announceData?.version}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Couleur</td>
                                                    <td>{announceData?.nomCouleur}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Nombre de place</td>
                                                    <td>{announceData?.nbPlace}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Taille</td>
                                                    <td>{announceData?.nomTaille}</td>
                                                </tr><tr>
                                                    <td className="tdlabel">Usage</td>
                                                    <td>{announceData?.nomUsage}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Description</td>
                                                    <td>{announceData?.description}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Prix de vente</td>
                                                    <td>{announceData?.prixVente}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value="second">
                                        <IonItem slot="header" color="light">
                                            <IonLabel>Mecanique</IonLabel>
                                        </IonItem>
                                        <div className="ion-padding" slot="content">
                                            <table>
                                                <tr>
                                                    <td className="tdlabel">Source d' energie</td>
                                                    <td>{announceData?.nomEnergie}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Consommation</td>
                                                    <td>{announceData?.consommation}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Transmission</td>
                                                    <td>{announceData?.nomTransmission}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Nombre de vitesse</td>
                                                    <td>{announceData?.nbVitesse}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Type de moteur</td>
                                                    <td>{announceData?.nomTypeMoteur}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Puissance</td>
                                                    <td>{announceData?.puissance}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value="third">
                                        <IonItem slot="header" color="light">
                                            <IonLabel>Etat</IonLabel>
                                        </IonItem>
                                        <div className="ion-padding" slot="content">
                                            <table>
                                                <tr>
                                                    <td className="tdlabel">Carosserie</td>
                                                    <td>{announceData?.etatCarrosserie}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Siege</td>
                                                    <td>{announceData?.etatSiege}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Tableau</td>
                                                    <td>{announceData?.etatTableauBord}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Moteur</td>
                                                    <td>{announceData?.etatMoteur}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Freinage</td>
                                                    <td>{announceData?.etatFreinage}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Transmission</td>
                                                    <td>{announceData?.etatTransmission}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Pneu</td>
                                                    <td>{announceData?.etatPneu}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Electronique</td>
                                                    <td>{announceData?.etatElectronique}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Suspension</td>
                                                    <td>{announceData?.etatSuspension}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tdlabel">Kilometrage effectue</td>
                                                    <td>{announceData?.kmEffectue}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </IonAccordion>
                                    <IonAccordion value="fourth">
                                        <IonItem slot="header" color="light">
                                            <IonLabel>Modifier cette annonce</IonLabel>
                                        </IonItem>
                                        <div className="ion-padding" slot="content">
                                            <IonRow>
                                                <IonCol size="6">
                                                    <IonButton expand="full" color="warning">
                                                        <IonIcon slot="start" icon={createOutline}></IonIcon>
                                                        Modifier
                                                    </IonButton>
                                                </IonCol>
                                                <IonCol size="6">
                                                    <IonButton expand="full" color="danger" onClick={deleteAnnonce}>
                                                        <IonIcon slot="start" icon={trashOutline}></IonIcon>
                                                        Supprimer
                                                    </IonButton>
                                                </IonCol>
                                            </IonRow>
                                        </div>
                                    </IonAccordion>
                                </IonAccordionGroup>
                            </>
                        )
                    };
                </IonContent>
            </IonPage>
        </>
    );
};

export default DetailAnnonce;