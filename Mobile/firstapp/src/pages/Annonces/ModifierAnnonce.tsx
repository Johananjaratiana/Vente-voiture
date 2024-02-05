import { Camera, CameraResultType } from "@capacitor/camera";
import {
    IonAlert,
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonToolbar,
    IonLoading
} from '@ionic/react';
import { Storage } from '@ionic/storage';
import { camera } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import Menu from "../../components/Menu/Menu";
import { WEB_SERVICE_URL } from '../../constants';
import './ModifierAnnonce.scss';

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

interface PhotoAnnonceData {
    id: number;
    idAnnonce: number;
    image: string;
}

interface AjoutAnnonceData {
    marque: [];
    modele: [];
    taille: [];
    usage: [];
    energie: [];
    transmission: [];
    typeAnnonce: [];
    typeMoteur: [];
    couleur: [];
}

interface PhotoAnnonce {
    idAnnonce: string;
    image: string | undefined;
}

const ModifierAnnonce: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const [announceData, setAnnounceData] = useState<AnnounceData | null>(null);
    const [photoAnnonces, setPhotoAnnonces] = useState<PhotoAnnonce[]>([]);
    const [images, setImages] = useState<(string | undefined)[]>([]);

    const [activeButton, setActiveButton] = useState<number>(1);
    const [data, setData] = useState<AjoutAnnonceData>();
    const [marque, setMarque] = useState(1);
    const [modele, setModele] = useState(1);
    const [couleur, setCouleur] = useState(1);
    const [taille, setTaille] = useState(1);
    const [usage, setUsage] = useState(1);
    const [sourceEnergie, setSourceEnergie] = useState(1);
    const [transmission, setTransmission] = useState(1);
    const [typeMoteur, setTypeMoteur] = useState(1);
    const [version, setVersion] = useState('');
    const [nombrePlaces, setNombrePlaces] = useState(0);
    const [description, setDescription] = useState('');
    const [prixVente, setPrixVente] = useState(0);
    const [consommation, setConsommation] = useState('');
    const [nombreVitesse, setNombreVitesse] = useState(0);
    const [puissance, setPuissance] = useState(0);
    const [carosserie, setCarosserie] = useState(0);
    const [siege, setSiege] = useState(0);
    const [tableauBord, setTableauBord] = useState(0);
    const [moteur, setMoteur] = useState(0);
    const [freinage, setFreinage] = useState(0);
    const [pneu, setPneu] = useState(0);
    const [electronique, setElectronique] = useState(0);
    const [suspension, setSuspension] = useState(0);
    const [kilometrage, setKilometrage] = useState(0);
    const [typeAnnonce, setTypeAnnonce] = useState(1);
    const [etatTransmission, setEtatTransmission] = useState(0);
    const [numero, setNumero] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const history = useHistory();
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(WEB_SERVICE_URL + '/v_annonce_complets/' + id);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: AnnounceData = await response.json();
                setAnnounceData(data);
                setMarque(data.idMarque);
                setModele(data.idModele);
                setVersion(data.version);
                setNombrePlaces(data.nbPlace);
                setTaille(data.idTaille);
                setUsage(data.idUsage);
                setDescription(data.description);
                setNumero(data.numero);
                setPrixVente(data.prixVente);
                setSourceEnergie(data.idEnergie);
                setConsommation(data.consommation.toString());
                setTransmission(data.idTransmission);
                setNombreVitesse(data.nbVitesse);
                setTypeMoteur(data.idTypeMoteur);
                setPuissance(data.puissance);
                setCarosserie(data.etatCarrosserie);
                setSiege(data.etatSiege);
                setTableauBord(data.etatTableauBord);
                setMoteur(data.etatMoteur);
                setPneu(data.etatPneu);
                setElectronique(data.etatElectronique);
                setSuspension(data.etatSuspension);
                setKilometrage(data.kmEffectue);
                setTypeAnnonce(data.idTypeAnnonce);
                setFreinage(data.etatFreinage);
                setEtatTransmission(data.etatTransmission);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchPhotoAnnonces = async () => {
            try {
                const response = await fetch(WEB_SERVICE_URL + `/photo_annonces/annonce/${id}`);
                const data = await response.json();
                setPhotoAnnonces(data['data']);
            } catch (error) {
                console.error('Error fetching photo annonces:', error);
            }
        };

        fetchPhotoAnnonces();
    }, [id]);

    const handleMarqueChange = (e: any) => {
        setMarque(e.detail.value);
    };

    const handleModeleChange = (e: any) => {
        setModele(e.detail.value);
    };

    const handleCouleurChange = (e: any) => {
        setCouleur(e.detail.value);
    };

    const handleTailleChange = (e: any) => {
        setTaille(e.detail.value);
    };

    const handleUsageChange = (e: any) => {
        setUsage(e.detail.value);
    };

    const handleSourceEnergieChange = (e: any) => {
        setSourceEnergie(e.detail.value);
    };

    const handleTransmissionChange = (e: any) => {
        setTransmission(e.detail.value);
    };

    const handleTypeMoteurChange = (e: any) => {
        setTypeMoteur(e.detail.value);
    };

    const handleVersionChange = (e: any) => {
        setVersion(e.detail.value);
    };

    const handleNombrePlacesChange = (e: any) => {
        setNombrePlaces(e.detail.value);
    };

    const handleDescriptionChange = (e: any) => {
        setDescription(e.detail.value);
    };

    const handlePrixVenteChange = (e: any) => {
        setPrixVente(e.detail.value);
    };
    const handleConsommationChange = (e: any) => {
        setConsommation(e.detail.value);
    };

    const handleNombreVitesseChange = (e: any) => {
        setNombreVitesse(e.detail.value);
    };

    const handlePuissanceChange = (e: any) => {
        setPuissance(e.detail.value);
    };

    const handleCarosserieChange = (e: any) => {
        setCarosserie(e.detail.value);
    };

    const handleSiegeChange = (e: any) => {
        setSiege(e.detail.value);
    };

    const handleTableauBordChange = (e: any) => {
        setTableauBord(e.detail.value);
    };

    const handleMoteurChange = (e: any) => {
        setMoteur(e.detail.value);
    };

    const handleFreinageChange = (e: any) => {
        setFreinage(e.detail.value);
    };

    const handlePneuChange = (e: any) => {
        setPneu(e.detail.value);
    };

    const handleElectroniqueChange = (e: any) => {
        setElectronique(e.detail.value);
    };

    const handleSuspensionChange = (e: any) => {
        setSuspension(e.detail.value);
    };

    const handleKilometrageChange = (e: any) => {
        setKilometrage(e.detail.value);
    };

    const handleTypeAnnonceChange = (e: any) => {
        setTypeAnnonce(e.target.value);
    };

    const handleEtatTransmissionChange = (e: any) => {
        setEtatTransmission(e.target.value)
    };

    const handleNumeroChange = (e: any) => {
        setNumero(e.target.value)
    };

    const handleAlertClose = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(WEB_SERVICE_URL + '/creation_annnonce/data_utils');
                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    const openCamera = async () => {
        try {
            const capImage = await Camera.getPhoto({
                quality: 1,
                allowEditing: false,
                resultType: CameraResultType.Base64,
            });
            setImages(prevImages => [...prevImages, capImage.base64String]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async () => {
        setShowLoading(true);
        const formData = {
            id: 0,
            version: version,
            status: announceData?.status,
            description: description,
            idUsers: announceData?.idUsers,
            kmEffectue: kilometrage,
            idModele: modele,
            idMarque: marque,
            numero: numero,
            idTypeMoteur: typeAnnonce,
            dateAnnonce: announceData?.dateAnnonce,
            consommation: consommation,
            idTaille: taille,
            nbPlace: nombrePlaces,
            prixVente: prixVente,
            idEnergie: sourceEnergie,
            idTransmission: transmission,
            idUsage: usage,
            puissance: puissance,
            nbVitesse: nombreVitesse,
            idCouleur: couleur,
            idTypeAnnonce: typeAnnonce
        };
        try {
            const store = new Storage();
            await store.create();
            const token = await store.get('token');
            const response = await fetch(WEB_SERVICE_URL + '/annonces/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            const message = data['message'];
            if (message == 'error') {
                console.log(data);
                throw new Error();
            }
            else {
                const formData2 = {
                    transmission: etatTransmission,
                    idAnnonce: id,
                    siege: siege,
                    electronique: electronique,
                    tableauBord: tableauBord,
                    suspension: suspension,
                    moteur: moteur,
                    freinage: freinage,
                    pneu: pneu,
                    carrosserie: carosserie
                };
                const response2 = await fetch(WEB_SERVICE_URL + '/etat_annonces/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData2),
                });
                const data2 = await response2.json();
                const message2 = data2['message'];
                console.log(data2);
                if (message2 == 'error') {
                    throw new Error();
                }
                else {
                    let formData3: PhotoAnnonce[] = [];
                    images.forEach((img) => {
                        let newPhotoAnnonce: PhotoAnnonce = {
                            idAnnonce: id,
                            image: img,
                        };
                        formData3.push(newPhotoAnnonce);
                    });
                    const response3 = await fetch(WEB_SERVICE_URL + '/photo_annonce/many', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify(formData3),
                    });
                    const data3 = await response3.json();
                    const message3 = data3['message'];
                    if (message3 == 'error') {
                        throw new Error();
                    }
                    else {
                        history.push('/annonce/detail/' + id);
                    }
                }
            }
        } catch (error) {
            setShowLoading(false);
            setShowAlert(true);
            console.error('Error:', error);
        } finally {
            setShowLoading(false);
        }
    };

    return (
        <>
            <Menu />
            <IonPage id="main-content">
                <Header title="Modification annonce" />
                <IonHeader id="pagination2" className="ion-no-border ion-no-padding">
                    <IonToolbar>
                        <div id="tool2">
                            {[1, 2, 3, 4].map((buttonNumber) => (
                                <>
                                    <div key={buttonNumber} id="tool-div-button2">
                                        <IonButton
                                            className={`pagination-button2 ${activeButton === buttonNumber ? 'active-button2' : ''
                                                }`}
                                            onClick={() => handleButtonClick(buttonNumber)}
                                            size="small"
                                        >
                                            {buttonNumber}
                                        </IonButton>
                                    </div>

                                    {buttonNumber !== 4 && (
                                        <div id="tool-div-elan2">
                                            <div id="elan2"></div>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="modif-annonce ion-no-padding">
                    {/*  */}
                    <IonAlert
                        isOpen={showAlert}
                        onDidDismiss={handleAlertClose}
                        header={'Erreur'}
                        message={'Il y a eu un erreur lors de la modification de votre annonce'}
                        buttons={['Reessayer']}
                    />
                    <IonLoading
                        className="custom-loading"
                        isOpen={showLoading}
                        backdropDismiss={false}
                        message={'Veillez patienter...'}
                        spinner={"circular"}
                    />
                    {/*  */}
                    {activeButton === 1 &&
                        <div className="modif-annonce-page">
                            <div className="modif-annonce-title">
                                <h2>Informations generales</h2>
                            </div>
                            <div className="modif-annonce-content">
                                <IonSelect value={marque} onIonChange={handleMarqueChange} className="modif-annonce" label="Marque" labelPlacement="stacked">
                                    {data?.marque.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonSelect value={modele} onIonChange={handleModeleChange} className="modif-annonce" label="Modele" labelPlacement="stacked">
                                    {data?.modele.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={version} onIonChange={handleVersionChange} className="modif-annonce" type="text" labelPlacement="stacked" label="Version">
                                </IonInput>
                                <IonSelect value={couleur} onIonChange={handleCouleurChange} className="modif-annonce" label="Couleur" labelPlacement="stacked">
                                    {data?.couleur.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={nombrePlaces} onIonChange={handleNombrePlacesChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Nombre de places">
                                </IonInput>
                                <IonSelect value={taille} onIonChange={handleTailleChange} className="modif-annonce" label="Taille" labelPlacement="stacked">
                                    {data?.taille.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonSelect value={usage} onIonChange={handleUsageChange} className="modif-annonce" label="Usage" labelPlacement="stacked">
                                    {data?.usage.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonTextarea value={description} onIonChange={handleDescriptionChange} className="modif-annonce" label="Description" labelPlacement="stacked"></IonTextarea>
                                <IonInput required={true} value={numero} onIonChange={handleNumeroChange} className="modif-annonce" type="text" labelPlacement="stacked" label="Numero">
                                </IonInput>
                                <IonInput required={true} value={prixVente} onIonChange={handlePrixVenteChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Prix de vente">
                                </IonInput>
                                <div id="modif-annonce-button">
                                    <IonButton color="success" onClick={() => handleButtonClick(2)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 2 &&
                        <div className="modif-annonce-page">
                            <div className="modif-annonce-title">
                                <h2>Mecanique</h2>
                            </div>
                            <div className="modif-annonce-content">
                                <IonSelect value={sourceEnergie} onIonChange={handleSourceEnergieChange} className="modif-annonce" label="Source d' energie" labelPlacement="stacked">
                                    {data?.energie.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={consommation} onIonChange={handleConsommationChange} className="modif-annonce" type="text" labelPlacement="stacked" label="Consommation">
                                </IonInput>
                                <IonSelect value={transmission} onIonChange={handleTransmissionChange} className="modif-annonce" label="Transmission" labelPlacement="stacked">
                                    {data?.transmission.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={nombreVitesse} onIonChange={handleNombreVitesseChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Nombre de vitesse">
                                </IonInput>
                                <IonSelect value={typeMoteur} onIonChange={handleTypeMoteurChange} className="modif-annonce" label="Type de moteur" labelPlacement="stacked">
                                    {data?.typeMoteur.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={puissance} onIonChange={handlePuissanceChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Puissance">
                                </IonInput>
                                <div id="modif-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(1)}>Precedent</IonButton>
                                    <IonButton color="success" onClick={() => handleButtonClick(3)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 3 &&
                        <div className="modif-annonce-page">
                            <div className="modif-annonce-title">
                                <h2>Etat sur 10</h2>
                            </div>
                            <div className="modif-annonce-content">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={carosserie} onIonChange={handleCarosserieChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Carosserie">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={siege} onIonChange={handleSiegeChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Siege">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={tableauBord} onIonChange={handleTableauBordChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Tablea de bord">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={moteur} onIonChange={handleMoteurChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Moteur">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={freinage} onIonChange={handleFreinageChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Freinage">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={etatTransmission} onIonChange={handleEtatTransmissionChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Transmission">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={pneu} onIonChange={handlePneuChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Pneu">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={electronique} onIonChange={handleElectroniqueChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Electronique">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={suspension} onIonChange={handleSuspensionChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Suspension">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonInput required={true} value={kilometrage} onIonChange={handleKilometrageChange} className="modif-annonce" type="number" labelPlacement="stacked" label="Kilometrage effectue">
                                </IonInput>
                                <IonButton expand="full" onClick={openCamera}>
                                    <IonIcon icon={camera} slot="start" />
                                    Ajouter d' autres photos
                                </IonButton>
                                {
                                    <div className="showImages2">
                                        {photoAnnonces.map((image, index) => (
                                            <img key={index} src={image.image} alt={`Image ${index}`} />
                                        ))}
                                        {images.map((image, index) => (
                                            <img key={index} src={`data:image/jpeg;base64,${image}`} alt={`Image ${index}`} />
                                        ))}
                                    </div>
                                }
                                <div id="modif-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(2)}>Precedent</IonButton>
                                    <IonButton color="success" onClick={() => handleButtonClick(4)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 4 &&
                        <div className="modif-annonce-page">
                            <div className="modif-annonce-title">
                                <h2>Concernant l' annonce</h2>
                            </div>
                            <div className="modif-annonce-content">
                                <IonSelect value={typeAnnonce} onIonChange={handleTypeAnnonceChange} className="modif-annonce" label="Type de l' annonce" labelPlacement="stacked">
                                    {data?.typeAnnonce.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <div id="modif-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(3)}>Precedent</IonButton>
                                    <IonButton color="success" onClick={handleSubmit}>Terminer</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                </IonContent>
            </IonPage >
        </>
    );
};

export default ModifierAnnonce;