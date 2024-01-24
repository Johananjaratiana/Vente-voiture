import { IonContent, IonPage } from "@ionic/react";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";

const Profil: React.FC = () => {

    return (
        <>
        <Menu/>
        <IonPage id="main-content">
            <Header title="Profil"/>
            <IonContent></IonContent>
        </IonPage>
        </>
    );
};

export default Profil;