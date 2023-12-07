import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab0.css';

const Tab0: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'success'}>
          <IonTitle class='ion-color-success-shade'>
            BeCool Travels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
      <img alt="Silhouette of mountains" src="https://i.abcnewsfe.com/a/08fa7ecb-8a45-4151-a5ae-62055b1e7022/philippines-mayon-volcano-ap-moe-008-230613_1686750302199_hpEmbed_3x2.jpg" />
      <IonCardHeader>
        <IonCardTitle>Mayon Volcano Alert!</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>The volcano, the most active on the archipelago, is wreaking havoc on the island of Luzon. In the past 24 hours, Mount Mayon, located on the northeastern Albay province, has recorded seven volcanic earthquakes and 309 rockfall events, according to a bulletin from the Philippine Institute of Volcanology and Seismology released Monday morning.</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab0;
