import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import { useRef, useState } from 'react';
const Tab1: React.FC = () => {
  
  const modal = useRef<HTMLIonModalElement>(null);
  return (
  
  <IonPage>
    <img
      src="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lkrts1fjoxp0q1hivhr8.jpg"
      alt="The Wisconsin State Capitol building in Madison, WI at night"
      className=''
    ></img>
    <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle class='ion-color-success-shade'>
            BeCool Travels</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonButton color={'success'} id="open-modal" expand="block">
          History
    </IonButton>
    <IonButton color={'success'} id="open-modal2" expand="block">
          Geography
    </IonButton>
    <IonButton color={'success'} id="open-modal3" expand="block">
          Fact's and Figures
    </IonButton>
    <IonButton color={'success'} id="open-modal4" expand="block">
          Municipalities
    </IonButton>
    <IonModal ref={modal} trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">
      The province of Albay is located in the Bicol region of the Philippines. It is the capital of Legazpi. The province contains one of the finest scenery in the world, particularly its famous Mayon Volcano, which is renowned for its cone-perfect shape. Mayon is a major tourist attraction and an active stratovolcano. The islands of Albay are characterized by splendid greenness, natural wonders, and glorious beaches along their coast. There is a rich cultural heritage in this province, where many festivals are held throughout the year. In particular, the Magayon Festival pays tribute to the beauty of the Mayon Volcano, which is a major cultural event for the people of Albay. In economic terms, Albay is primarily an agricultural area, with rice, coconut, and abaca being some of the main crops. Due to its location on the coast of the province, fishing is also an important sector.
      </div>
    </IonModal>
    <IonModal ref={modal} trigger="open-modal2" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">
        <img
          src="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lkrts1fjoxp0q1hivhr8.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
          className=''
        ></img>
      </div>
    </IonModal>
    <IonModal ref={modal} trigger="open-modal3" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">
        <img
          src="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lkrts1fjoxp0q1hivhr8.jpg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
          className=''
        ></img>
      </div>
    </IonModal>
    <IonModal ref={modal} trigger="open-modal4" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">
      <p>Bicol Region is composed of four contiguous provinces: Albay, Camarines Sur, Camarines Norte, and Sorsogon; two island provinces of Catanduanes and Masbate; and seven cities namely, Legazpi, Naga, Iriga, Tabaco, Ligao, Sorsogon, and Masbate.</p>
      </div>
    </IonModal>
    
    
    </IonContent>
  </IonPage>
)};

export default Tab1;
