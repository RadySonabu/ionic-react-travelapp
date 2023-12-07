import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTextarea, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [presentAlert] = useIonAlert();
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
        <IonInput inputMode='email' type="email" label="Contact Email" labelPlacement="floating" fill="outline" placeholder="Enter contact email"></IonInput>
        &nbsp;
        <IonInput inputMode='text' size={500} type="text" label="Message" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
        &nbsp;
        

        <IonButton expand="full"
          onClick={() =>
            presentAlert({
                header: 'Feedback sent',
                message: 'Thank you for your feedback!',
                buttons: ['OK'],
            })
          }
        >Send</IonButton>
      </IonCard>
      <IonCard >
      <IonCardHeader>
        <IonCardTitle>You may contact us</IonCardTitle>
        <IonCardSubtitle>using the link below</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>

      <IonButton fill="clear"
        onClick={() =>
          presentAlert({
              header: 'Email Address',
              subHeader: 'You may send your queries on our official email',
              message: 'beecooltravels@travellers.ph',
              buttons: ['OK'],
          })
        }
      >Email address</IonButton>
      <IonButton fill="clear"
      onClick={() =>
        presentAlert({
          header: 'Telephone Number',
          subHeader: 'For faster transaction, you may call us at',
          message: '+(02) 8888-8888',
          buttons: ['OK'],
        })
      }
      >Telephone Number</IonButton>
    </IonCard>
      </IonContent> 

      
    </IonPage>
  );
};

export default Tab3;
