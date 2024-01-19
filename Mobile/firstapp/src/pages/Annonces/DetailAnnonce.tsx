import { IonAccordion, IonAccordionGroup, IonButton, IonCol, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';
import { checkmarkDoneCircleOutline, createOutline, trashOutline } from 'ionicons/icons';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import './DetailAnnonce.scss';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import '@ionic/react/css/ionic-swiper.css';


const DetailAnnonce: React.FC = () => {
    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Detail annonce" />
                <IonContent className="ion-no-padding">
                    <Swiper id="slide"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <IonImg src="https://image-cdn.beforward.jp/large/201704/752032/BF629619_0e4c71.jpg"></IonImg>
                        </SwiperSlide>
                        <SwiperSlide>
                            <IonImg src="https://image-cdn.beforward.jp/large/201704/752032/BF629619_cc651c.jpg"></IonImg>
                        </SwiperSlide>
                        <SwiperSlide>
                            <IonImg src="https://image-cdn.beforward.jp/large/201704/752032/BF629619_1f53ab.jpg"></IonImg>
                        </SwiperSlide>
                    </Swiper>
                    <div className="detail">
                        <div className="title">
                            KIA Pride SLX
                        </div>
                        <div className="state">
                            EN VENTE
                        </div>
                    </div>
                    <div className="actions">
                        <div className="mis-en-vente">
                            Mis en vente le 12/12/2023
                        </div>
                        <div className="action">
                            <IonButton expand="full" color="success">
                                <IonIcon slot="start" icon={checkmarkDoneCircleOutline}></IonIcon>
                                Marquer comme vendu
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
                                        <td>KIA</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Modele</td>
                                        <td>Pride</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Version</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Couleur</td>
                                        <td>Gris</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Nombre de place</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Taille</td>
                                        <td>Taille</td>
                                    </tr><tr>
                                        <td className="tdlabel">Usage</td>
                                        <td>Familial</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Description</td>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde perferendis, dicta, aut eos voluptatum necessitatibus pariatur tenetur ducimus tempore dolor deleniti architecto laborum cupiditate iure exercitationem soluta deserunt ratione.</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Prix de vente</td>
                                        <td>110 000 000</td>
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
                                        <td>Gasoil</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Consommation</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Transmission</td>
                                        <td>Automatique</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Nombre de vitesse</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Type de moteur</td>
                                        <td>CRDI</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Puissance</td>
                                        <td>110 ch</td>
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
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Siege</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Tableau</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Moteur</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Freinage</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Transmission</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Pneu</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Electronique</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Suspension</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td className="tdlabel">Kilometrage effectue</td>
                                        <td>74 000 km</td>
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
                                        <IonButton expand="full" color="danger">
                                            <IonIcon slot="start" icon={trashOutline}></IonIcon>
                                            Supprimer
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>
                </IonContent>
            </IonPage>
        </>
    );
};

export default DetailAnnonce;