import { Redirect, Route } from 'react-router-dom';
import {
  IonAlert,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  useIonAlert
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { airplaneOutline, atOutline, homeOutline, mailOutline, peopleOutline } from 'ionicons/icons';
import Tab0 from './pages/Tab0';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import TabMain from './pages/TabMain';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState()
  console.log(window.location.pathname, 'asdf')
  return (
    
    <IonApp>
      <IonReactRouter>
      {window.location.pathname != '/' ? (
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab0">
              <Tab0 />
            </Route>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <TabMain/>
            </Route>
          </IonRouterOutlet>
            
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab0" href="/tab0">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={peopleOutline} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={airplaneOutline} />
              <IonLabel>Tourist Spots</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={mailOutline} />
              <IonLabel>Contact Us</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        ) : <TabMain></TabMain>}
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
