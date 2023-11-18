import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar  color='success'>
          <IonTitle>BeCool Travels</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonCard className='ion-padding'>
      <IonCardHeader>
        <IonCardTitle>Feedback</IonCardTitle>
        <IonCardSubtitle>We loved to hear your feedback!</IonCardSubtitle>
      </IonCardHeader>
        <IonInput type="email" label="Contact Email" labelPlacement="floating" fill="outline" placeholder="Enter contact email"></IonInput>
        &nbsp;
        <IonInput  label="Feedback" labelPlacement="floating" fill="outline" placeholder="Enter message"></IonInput>
        &nbsp;
        <IonButton expand="full">Send</IonButton>
      </IonCard>
      <IonCard >
      <IonCardHeader>
        <IonCardTitle>You may contact us</IonCardTitle>
        <IonCardSubtitle>using the link below</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

      <IonButton fill="clear">Email address</IonButton>
      <IonButton fill="clear">Telephone Number</IonButton>
    </IonCard>
      </IonContent> 

      
    </IonPage>
  );
};

export default Tab3;
