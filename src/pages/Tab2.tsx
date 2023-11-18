import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle>BeCool Travels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true} >
    <img alt="Silhouette of mountains" src="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lkrts1fjoxp0q1hivhr8.jpg" 
      />
      <div className='ion-padding'>
        <h1>Mayon Volcano</h1>
        <p>
          Brief Info: Mayon Volcano is Albay's iconic landmark, known for its perfectly symmetrical cone shape. It is an active stratovolcano and a popular destination for hikers and nature enthusiasts. The Cagsawa Ruins, remnants of a church destroyed by an eruption, offer a dramatic view of Mayon.
          How to Get There: Learn more about reaching Mayon Volcano.
        </p>

        </div>
      <img alt="Silhouette of mountains" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8c/40/87/cagsawa-ruins-park.jpg?w=1200&h=1200&s=1" 
    className='img-sticky'
      />
      <div className='ion-padding'>
        <h1>Cagsawa Ruins</h1>
        <p>
        Brief Info: The Cagsawa Ruins are the remains of a 16th-century church buried by lava during Mayon Volcano's eruption in 1814. The site provides a picturesque view of Mayon Volcano and attracts visitors for its historical and scenic significance.
        How to Get There: Find information on reaching Cagsawa Ruins.
        </p>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
