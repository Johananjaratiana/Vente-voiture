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
    IonToolbar
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(WEB_SERVICE_URL + '/v_annonce_complets/' + id);
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
                const response = await fetch(WEB_SERVICE_URL + `/photo_annonces/annonce/${id}`);
                const data = await response.json();
                setPhotoAnnonces(data['data']);
            } catch (error) {
                console.error('Error fetching photo annonces:', error);
            }
        };

        fetchPhotoAnnonces();
    }, [id]);

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
    const [version, setVersion] = useState('2.0');
    const [nombrePlaces, setNombrePlaces] = useState(5);
    const [description, setDescription] = useState('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ut quam, doloribus in nobis voluptates autem commodi ratione corrupti harum, non modi? Pariatur nobis similique, sint sapiente enim nemo minima.');
    const [prixVente, setPrixVente] = useState(50000000);
    const [consommation, setConsommation] = useState('4.8');
    const [nombreVitesse, setNombreVitesse] = useState(5);
    const [puissance, setPuissance] = useState(120);
    const [carosserie, setCarosserie] = useState(10);
    const [siege, setSiege] = useState(10);
    const [tableauBord, setTableauBord] = useState(10);
    const [moteur, setMoteur] = useState(10);
    const [freinage, setFreinage] = useState(10);
    const [pneu, setPneu] = useState(10);
    const [electronique, setElectronique] = useState(10);
    const [suspension, setSuspension] = useState(10);
    const [kilometrage, setKilometrage] = useState(10);
    const [typeAnnonce, setTypeAnnonce] = useState(1);
    const [etatTransmission, setEtatTransmission] = useState(10);
    const [numero, setNumero] = useState('1212 TBA');
    const [showAlert, setShowAlert] = useState(false);
    const [images, setImages] = useState<(string | undefined)[]>([]);
    const history = useHistory();
    const [showLoading, setShowLoading] = useState(false);

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
            description: description,
            status: 0,
            nbPlace: nombrePlaces,
            kmEffectue: kilometrage,
            numero: numero,
            idTransmission: transmission,
            puissance: puissance,
            dateAnnonce: new Date().toISOString(),
            consommation: consommation,
            nbVitesse: nombreVitesse,
            idModele: modele,
            prixVente: prixVente,
            idEnergie: sourceEnergie,
            idUsage: usage,
            idCouleur: couleur,
            idTaille: taille,
            idMarque: marque,
            idTypeAnnonce: typeAnnonce,
            idTypeMoteur: typeMoteur,
        };
        try {
            const store = new Storage();
            await store.create();
            const token = await store.get('token');
            const response = await fetch(WEB_SERVICE_URL + '/creation_annnonce/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            const message = data['message'];
            if (message == 'error') {
                throw new Error();
            }
            else {
                const idAnnonce = data['data']['id'];
                const formData2 = {
                    transmission: etatTransmission,
                    idAnnonce: idAnnonce,
                    siege: siege,
                    electronique: electronique,
                    tableauBord: tableauBord,
                    suspension: suspension,
                    moteur: moteur,
                    freinage: freinage,
                    pneu: pneu,
                    carrosserie: carosserie
                };
                const response2 = await fetch(WEB_SERVICE_URL + '/etat_annonces', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData2),
                });
                const data2 = await response2.json();
                const message2 = data2['message'];
                if (message2 == 'error') {
                    throw new Error();
                }
                else {
                    let formData3: PhotoAnnonce[] = [];
                    images.forEach((img) => {
                        let newPhotoAnnonce: PhotoAnnonce = {
                            idAnnonce: idAnnonce,
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
                        history.push('/annonce/detail/' + idAnnonce);
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
                <Header title="Ajout annonce" />
                <IonHeader id="pagination" className="ion-no-border ion-no-padding">
                    <IonToolbar>
                        <IonRow>
                            {[1, 2, 3, 4].map((buttonNumber) => (
                                <IonCol key={buttonNumber} size="3" className="ion-text-center">
                                    <IonButton
                                        className={`pagination-button ${activeButton === buttonNumber ? 'active-button' : ''
                                            }`}
                                        onClick={() => handleButtonClick(buttonNumber)}
                                    >
                                        {buttonNumber}
                                    </IonButton>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ajout-annonce ion-padding">
                    {/*  */}
                    <IonAlert
                        isOpen={showAlert}
                        onDidDismiss={handleAlertClose}
                        header={'Error'}
                        message={'There was an error creating your annonce'}
                        buttons={['Try Again']}
                    />
                    <IonAlert
                        backdropDismiss={false}
                        isOpen={showLoading}
                        header={'Loading'}
                        message={'Please wait while we create your annonce'}
                    />
                    {/*  */}
                    {activeButton === 1 &&
                        <div className="ajout-annonce-page">
                            <div className="ajout-annonce-title">
                                <h2>Informations generales</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonSelect value={announceData?.idMarque} onIonChange={handleMarqueChange} className="ajout-annonce" label="Marque" labelPlacement="stacked">
                                    {data?.marque.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonSelect value={modele} onIonChange={handleModeleChange} className="ajout-annonce" label="Modele" labelPlacement="stacked">
                                    {data?.modele.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={version} onIonChange={handleVersionChange} className="ajout-annonce" type="text" labelPlacement="stacked" label="Version">
                                </IonInput>
                                <IonSelect value={couleur} onIonChange={handleCouleurChange} className="ajout-annonce" label="Couleur" labelPlacement="stacked">
                                    {data?.couleur.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={nombrePlaces} onIonChange={handleNombrePlacesChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Nombre de places">
                                </IonInput>
                                <IonSelect value={taille} onIonChange={handleTailleChange} className="ajout-annonce" label="Taille" labelPlacement="stacked">
                                    {data?.taille.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonSelect value={usage} onIonChange={handleUsageChange} className="ajout-annonce" label="Usage" labelPlacement="stacked">
                                    {data?.usage.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonTextarea value={description} onIonChange={handleDescriptionChange} className="ajout-annonce" label="Description" labelPlacement="stacked"></IonTextarea>
                                <IonInput required={true} value={numero} onIonChange={handleNumeroChange} className="ajout-annonce" type="text" labelPlacement="stacked" label="Numero">
                                </IonInput>
                                <IonInput required={true} value={prixVente} onIonChange={handlePrixVenteChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Prix de vente">
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
                                <IonSelect value={sourceEnergie} onIonChange={handleSourceEnergieChange} className="ajout-annonce" label="Source d' energie" labelPlacement="stacked">
                                    {data?.energie.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={consommation} onIonChange={handleConsommationChange} className="ajout-annonce" type="text" labelPlacement="stacked" label="Consommation">
                                </IonInput>
                                <IonSelect value={transmission} onIonChange={handleTransmissionChange} className="ajout-annonce" label="Transmission" labelPlacement="stacked">
                                    {data?.transmission.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={nombreVitesse} onIonChange={handleNombreVitesseChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Nombre de vitesse">
                                </IonInput>
                                <IonSelect value={typeMoteur} onIonChange={handleTypeMoteurChange} className="ajout-annonce" label="Type de moteur" labelPlacement="stacked">
                                    {data?.typeMoteur.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <IonInput required={true} value={puissance} onIonChange={handlePuissanceChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Puissance">
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
                                <h2>Etat sur 10</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={carosserie} onIonChange={handleCarosserieChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Carosserie">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={siege} onIonChange={handleSiegeChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Siege">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={tableauBord} onIonChange={handleTableauBordChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Tablea de bord">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={moteur} onIonChange={handleMoteurChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Moteur">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={freinage} onIonChange={handleFreinageChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Freinage">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={etatTransmission} onIonChange={handleEtatTransmissionChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Transmission">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={pneu} onIonChange={handlePneuChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Pneu">
                                        </IonInput>
                                    </IonCol>
                                    <IonCol size="6">
                                        <IonInput required={true} value={electronique} onIonChange={handleElectroniqueChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Electronique">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol size="6">
                                        <IonInput required={true} value={suspension} onIonChange={handleSuspensionChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Suspension">
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonInput required={true} value={kilometrage} onIonChange={handleKilometrageChange} className="ajout-annonce" type="number" labelPlacement="stacked" label="Kilometrage effectue">
                                </IonInput>
                                <IonButton expand="full" onClick={openCamera}>
                                    <IonIcon icon={camera} slot="start" />
                                    Ajouter des photos
                                </IonButton>
                                {
                                    <div className="showImages">
                                        {images.map((image, index) => (
                                            <img key={index} src={`data:image/jpeg;base64,${image}`} alt={`Image ${index}`} />
                                        ))}
                                    </div>
                                }
                                <div id="ajout-annonce-button">
                                    <IonButton color="danger" onClick={() => handleButtonClick(2)}>Precedent</IonButton>
                                    <IonButton color="success" onClick={() => handleButtonClick(4)}>Suivant</IonButton>
                                </div>
                            </div>
                        </div>
                    }
                    {activeButton === 4 &&
                        <div className="ajout-annonce-page">
                            <div className="ajout-annonce-title">
                                <h2>Concernant l' annonce</h2>
                            </div>
                            <div className="ajout-annonce-content">
                                <IonSelect value={typeAnnonce} onIonChange={handleTypeAnnonceChange} className="ajout-annonce" label="Type de l' annonce" labelPlacement="stacked">
                                    {data?.typeAnnonce.map((item: any) => (
                                        <IonSelectOption key={item.id} value={item.id}>
                                            {item.nom}
                                        </IonSelectOption>
                                    ))}
                                </IonSelect>
                                <div id="ajout-annonce-button">
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