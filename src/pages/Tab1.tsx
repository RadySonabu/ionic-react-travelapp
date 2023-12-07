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
      <div>The province of <b>Albay</b> is located in the <b>Bicol</b> region of the Philippines. It is the capital of Legazpi. The province contains one of the finest scenery in the world, particularly its famous <b>Mayon Volcano</b>, which is renowned for its cone-perfect shape. Mayon is a major tourist attraction and an active stratovolcano.
      <br></br>
      <br></br>
       The islands of Albay are characterized by splendid <b>greenness, natural wonders, and glorious beaches</b> along their coast. There is a rich cultural heritage in this province, where many festivals are held throughout the year. In particular, the Magayon Festival pays tribute to the beauty of the Mayon Volcano, which is a major cultural event for the people of Albay. 
       <br></br>
       <br></br>
       In economic terms, Albay is primarily an agricultural area, with <b>rice, coconut, and abaca</b> being some of the main crops. Due to its location on the coast of the province, fishing is also an important sector.</div>
      
      </div>
      
    </IonModal>
    <IonModal ref={modal} trigger="open-modal2" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="" style={{padding:'10px'}}>
      <img alt="Silhouette of mountains" src="https://albay.gov.ph/wp-content/uploads/2021/04/EASTCOAST-FULL-scaled.jpg" />
        <p>The province is generally mountainous with scattered fertile plains and valleys. Aside from Mayon Volcano, it has two other major peaks: Mount Masaraga and Mount Malinao.

        The western coast of the province is mountainous but not as prominent as the eastern range with the highest elevation at around 490 meters (1,610 ft.). Among these mountains are Mount Catburawan in Ligao and Mount Pantao in Oas & Libon.</p>
      </div>
    </IonModal>
    <IonModal ref={modal} trigger="open-modal3" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="">
        <img
          src="https://play-lh.googleusercontent.com/3cyOfrGeCTEQPkwvn7JqvV1Kn0vyOMRRgFUMH-RaGly78gfQ5JwhFMGpJLF8ykoGENg"
          alt="The Wisconsin State Capitol building in Madison, WI at night"
          className=''
        ></img>
        <p style={{padding: '10px'}}>
<b>1.)</b> Mayon Volcano is an active volcano famous for its almost perfect cone shape. The cone is considered to be the world's most perfectly-formed volcano for its symmetry.
<br></br>
<br></br>
<b>2.)</b> Mayon Volcano is the iconic landmark of Albay province. It has an elevation of 2,463 meters.
<br></br>
<br></br>

<b>3.)</b> Mayon Volcano is the Philippines’ most active volcano with a recorded eruption of 48 times within a span of 400 years. The very first recorded eruption of the volcano was in February 1616.
<br></br>
<br></br>

<b>4.)</b> The mountain is a national park and a protected landscape and was proclaimed in 2000 as Mayon Volcano Natural Park.
<br></br>
<br></br>

<b>5.)</b> In the Bicol dialect it is called Bulkang Magayon which means Beautiful Volcano in English. It was named after the legendary heroine Daragang Magayon or Beautiful Lady.</p>
      </div>
    </IonModal>
    <IonModal ref={modal} trigger="open-modal4" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="" style={{padding:'10px'}}>
      <div  style={{paddingLeft:'60px'}}>
      <img alt="Silhouette of mountains" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ph_locator_albay_legazpi.png/250px-Ph_locator_albay_legazpi.png" />
      </div>
      <p><b>Bicol Region</b> is composed of four contiguous provinces: <b>Albay, Camarines Sur, Camarines Norte, and Sorsogon</b>; two island provinces of Catanduanes and Masbate; and seven cities namely, Legazpi, Naga, Iriga, Tabaco, Ligao, Sorsogon, and Masbate.</p>
      
      </div>
    </IonModal>
    
    
    </IonContent>
  </IonPage>
)};

export default Tab1;
