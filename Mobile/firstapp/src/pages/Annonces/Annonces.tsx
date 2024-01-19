import { IonContent, IonPage, IonRadio, IonRadioGroup, IonSearchbar, IonRow, IonCol, IonHeader, IonToolbar, IonFooter, IonButtons, IonButton, IonIcon, IonTitle, IonImg } from '@ionic/react';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import './Annonces.scss';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import AnnonceBox from '../../components/Annonces/AnnonceBox';

const Annonces: React.FC = () => {
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
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={0}></AnnonceBox>
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={1}></AnnonceBox>
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={2}></AnnonceBox>
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={0}></AnnonceBox>
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={1}></AnnonceBox>
                    <AnnonceBox imageUrl="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg" date="12/12/2023" title="KIA Pride SLX" status={2}></AnnonceBox>
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