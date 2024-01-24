import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Signup from './pages/Signup/Signup';
import Annonces from './pages/Annonces/Annonces';
import AjoutAnnonce from './pages/Annonces/AjoutAnnonce';
import DetailAnnonce from './pages/Annonces/DetailAnnonce';
import Notification from './pages/Notification/Notification';
import Profil from './pages/Profil/Profil';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/annonces">
          <Annonces />
        </Route>
        <Route exact path="/annonce/ajout">
          <AjoutAnnonce />
        </Route>
        <Route exact path="/annonce/detail">
          <DetailAnnonce />
        </Route>
        <Route exact path="/notification">
          <Notification />
        </Route>
        <Route exact path="/profil">
          <Profil />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
