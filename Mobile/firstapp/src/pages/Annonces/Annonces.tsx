import { IonContent, IonPage, IonRadio, IonRadioGroup, IonSearchbar, IonRow, IonCol, IonHeader, IonToolbar, IonFooter, IonButtons, IonButton, IonIcon, IonTitle, IonImg } from '@ionic/react';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import './Annonces.scss';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import AnnonceBox from '../../components/Annonces/AnnonceBox';
import React, { useEffect, useState } from 'react';
import { Storage } from '@ionic/storage';


const store = new Storage();
await store.create();

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
    image:string;
}

const Annonces: React.FC = () => {
    const [annonces, setAnnonces] = useState<Annonce[]>([]);
    useEffect(() => {
        const fetchAnnonces = async () => {
            try {
                const idUser = await store.get('idUser');
                const response = await fetch('http://localhost:8080/api/v_annonce_complets/users/'+ idUser);
                const data = await response.json();
                setAnnonces(data['data']);
            } catch (error) {
                console.error('Error fetching annonces:', error);
            }
        };

        fetchAnnonces();
    }, []);
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Annonces" />
                <IonHeader id="filtre" className="ion-no-border">
                    <IonToolbar>
                        <IonSearchbar placeholder="Rechercher" id="s" color="dark"></IonSearchbar>
                        <IonRadioGroup value="1">
                            <IonRow>
                                <IonCol size="6">
                                    <div id="radios">
                                        <IonRadio value="1" labelPlacement="end" color="dark" id="radio">
                                            Tout
                                        </IonRadio>
                                        <IonRadio value="2" labelPlacement="end" color="dark" id="radio">
                                            En vente
                                        </IonRadio>
                                    </div>
                                </IonCol>
                                <IonCol size="6">
                                    <div id="radios">
                                        <IonRadio value="3" labelPlacement="end" color="dark" id="radio">
                                            En attente
                                        </IonRadio>
                                        <IonRadio value="4" labelPlacement="end" color="dark" id="radio">
                                            Vendu
                                        </IonRadio>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonRadioGroup>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="annonces" >
                    {annonces.map((annonce) => (
                        <AnnonceBox key={annonce.id} id={annonce.id} imageUrl={annonce.image} date={annonce.dateAnnonce} title={annonce.nomMarque + " "+ annonce.nomModele} status={annonce.status}></AnnonceBox>
                    ))}
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton>
                                <IonIcon slot="icon-only" icon={chevronBackOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle className="pagination-text">
                            1/3
                        </IonTitle>
                        <IonButtons slot="end">
                            <IonButton>
                                <IonIcon slot="icon-only" icon={chevronForwardOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonFooter>
            </IonPage>
        </>
    );
};

export default Annonces;