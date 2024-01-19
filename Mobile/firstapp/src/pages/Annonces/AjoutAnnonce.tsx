import { useState } from 'react';
import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonPage,
    IonRow,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    IonTextarea
} from '@ionic/react';
import { camera } from 'ionicons/icons';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import './AjoutAnnonce.scss';


const AjoutAnnonce: React.FC = () => {
    const [activeButton, setActiveButton] = useState<number>(1);
    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Ajout annonce" />
                <IonHeader id="pagination" className="ion-no-border ion-no-padding">
                    <IonToolbar>
                        <IonRow>
                            <IonCol size="4" className="ion-text-center">
                                <IonButton className="pagination-button" onClick={() => handleButtonClick(1)}>1</IonButton>
                            </IonCol>
                            <IonCol size="4" className="ion-text-center">
                                <IonButton className="pagination-button" onClick={() => handleButtonClick(2)}>2</IonButton>
                            </IonCol>
                            <IonCol size="4" className="ion-text-center">
                                <IonButton className="pagination-button" onClick={() => handleButtonClick(3)}>3</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ajout-annonce ion-padding">
                    {activeButton === 1 &&
                        <div className="ajout-annonce-page">
                            <div className="ajout-annonce-title">
                                <h2>Informations generales</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonSelect className="ajout-annonce" label="Marque" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonSelect className="ajout-annonce" label="Modele" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Version">
                                </IonInput>
                                <IonSelect className="ajout-annonce" label="Couleur" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Nombre de places">
                                </IonInput>
                                <IonSelect className="ajout-annonce" label="Taille" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonSelect className="ajout-annonce" label="Usage" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonTextarea className="ajout-annonce" label="Description" labelPlacement="stacked"></IonTextarea>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Prix de vente">
                                </IonInput>
                                <div id="ajout-annonce-button">
                                    <IonButton color="success" onClick={() => handleButtonClick(2)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 2 &&
                        <div className="ajout-annonce-page">
                            <div className="ajout-annonce-title">
                                <h2>Mecanique</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonSelect className="ajout-annonce" label="Source d' energie" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Consommation">
                                </IonInput>
                                <IonSelect className="ajout-annonce" label="Transmission" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Nombre de vitesse">
                                </IonInput>
                                <IonSelect className="ajout-annonce" label="Type de moteur" labelPlacement="stacked">
                                    <IonSelectOption value="apple">Apple</IonSelectOption>
                                </IonSelect>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Puissance">
                                </IonInput>
                                <div id="ajout-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(1)}>Precedent</IonButton>
                                    <IonButton color="success" onClick={() => handleButtonClick(3)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 3 &&
                        <div className="ajout-annonce-page">
                            <div className="ajout-annonce-title">
                                <h2>Etat</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Carosserie">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Siege">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Tablea de bord">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Moteur">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Freinage">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Transmission">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Pneu">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Electronique">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Suspension">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonInput className="ajout-annonce" type="text" labelPlacement="stacked" label="Kilometrage effectue">
                                </IonInput>
                                <IonButton expand="full">
                                    <IonIcon icon={camera} slot="start" />
                                    Ajouter des photos
                                </IonButton>
                                <div id="ajout-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(2)}>Precedent</IonButton>
                                    <IonButton color="success">Terminer</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                </IonContent>
            </IonPage >
        </>
    );
};

export default AjoutAnnonce;