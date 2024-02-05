import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonRadio, IonRadioGroup, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Storage } from '@ionic/storage';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import AnnonceBox from '../../components/Annonces/AnnonceBox';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import { WEB_SERVICE_URL } from '../../constants';
import './Annonces.scss';
import NotificationService from '../Notification/NotificationService';

interface Annonce {
    id: number;
    version: string;
    description: string;
    status: number;
    idUsers: number;
    commissionTypeAnnonce: number;
    etatTransmission: number;
    niveauTypeAnnonce: number;
    etatElectronique: number;
    nbPlace: number;
    kmEffectue: number;
    idModele: number;
    idTypeMoteur: number;
    idMarque: number;
    idTransmission: number;
    nbVitesse: number;
    idTaille: number;
    idTypeAnnonce: number;
    numero: string;
    prixVente: number;
    idUsage: number;
    idEnergie: number;
    puissance: number;
    consommation: number;
    idCouleur: number;
    dateAnnonce: string;
    etatFreinage: number;
    nomCouleur: string;
    etatSuspension: number;
    nomMarque: string;
    nomEnergie: string;
    nomTaille: string;
    rgbCouleur: string;
    nomTypeAnnonce: string;
    nomTypeMoteur: string;
    nomUsers: string;
    nomTransmission: string;
    emailUsers: string;
    etatPneu: number;
    prenomUsers: string;
    etatSiege: number;
    etatMoteur: number;
    nomModele: string;
    etatCarrosserie: number;
    nomUsage: string;
    etatTableauBord: number;
    telephoneUsers: string;
    image: string;
}

const Annonces: React.FC = () => {
    const [annonces, setAnnonces] = useState<Annonce[]>([]);
    const [searchText, setSearchText] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('1');
    const [filteredAnnonces, setFilteredAnnonces] = useState(annonces);

    // 
    useEffect(() => {
        NotificationService.init();
        return () => {
            //   NotificationService.removeListeners();
        };
    }, []);
    // 

    useEffect(() => {
        const fetchAnnonces = async () => {
            try {
                const store = new Storage();
                await store.create();
                const idUser = await store.get('idUser');
                const response = await fetch(WEB_SERVICE_URL + '/v_annonce_complets/users/' + idUser);
                const data = await response.json();
                setAnnonces(data['data']);
            } catch (error) {
                console.error('Error fetching annonces:', error);
            }
        };
        fetchAnnonces();
    }, []);

    useEffect(() => {

        const searchFiltered = annonces.filter((annonce) => {
            const marqueModele = `${annonce.nomMarque} ${annonce.nomModele}`.toLowerCase();
            return marqueModele.includes(searchText.toLowerCase());
        });

        let combinedFiltered;
        switch (selectedRadio) {
            case '1':
                combinedFiltered = searchFiltered;
                break;
            case '0':
                combinedFiltered = searchFiltered.filter((annonce) => annonce.status === 0);
                break;
            case '10':
                combinedFiltered = searchFiltered.filter((annonce) => annonce.status === 10);
                break;
            case '20':
                combinedFiltered = searchFiltered.filter((annonce) => annonce.status === 20);
                break;
            default:
                combinedFiltered = searchFiltered;
                break;
        }

        setFilteredAnnonces(combinedFiltered);
    }, [searchText, selectedRadio, annonces]);

    const handleSearchChange = (event: CustomEvent) => {
        const searchText = event.detail.value?.toLowerCase() || '';
        setSearchText(searchText);
    };

    const handleRadioChange = (event: CustomEvent) => {
        const selectedValue = event.detail.value;
        setSelectedRadio(selectedValue);
    };

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Mes annonces" />
                <IonHeader id="filtre" className="ion-no-border">
                    <IonToolbar>
                        <IonSearchbar placeholder="Rechercher" id="s" color="dark" value={searchText} onIonChange={handleSearchChange}></IonSearchbar>
                        <IonRadioGroup onIonChange={handleRadioChange} value={selectedRadio}>
                            <IonRow>
                                <IonCol size="6">
                                    <div id="radios">
                                        <IonRadio
                                            value="1"
                                            labelPlacement="end"
                                            color="dark"
                                            id="radio"
                                        >
                                            Tout
                                        </IonRadio>
                                        <IonRadio
                                            value="10"
                                            labelPlacement="end"
                                            color="dark"
                                            id="radio"
                                        >
                                            En vente
                                        </IonRadio>
                                    </div>
                                </IonCol>
                                <IonCol size="6">
                                    <div id="radios">
                                        <IonRadio
                                            value="0"
                                            labelPlacement="end"
                                            color="dark"
                                            id="radio"
                                        >
                                            En attente
                                        </IonRadio>
                                        <IonRadio
                                            value="20"
                                            labelPlacement="end"
                                            color="dark"
                                            id="radio"
                                        >
                                            Vendu
                                        </IonRadio>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonRadioGroup>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="annonces" >
                    {filteredAnnonces.map((annonce) => (
                        <AnnonceBox
                            key={annonce.id}
                            id={annonce.id}
                            imageUrl={annonce.image}
                            date={annonce.dateAnnonce}
                            title={annonce.nomMarque + ' ' + annonce.nomModele}
                            status={annonce.status}
                        />
                    ))}
                </IonContent>
            </IonPage>
        </>
    );
};

export default Annonces;