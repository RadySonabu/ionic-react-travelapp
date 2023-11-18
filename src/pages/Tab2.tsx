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
        <h1>Scroll the content and notice that the text goes behind the header and footer.</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed tellus nec mauris auctor dignissim
          fermentum in risus. Sed nec convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id mattis. Fusce
          augue diam, sagittis nec posuere at, consectetur tempor lectus. Nulla at lectus eget mauris iaculis malesuada
          mollis sed neque. Curabitur et risus tristique, malesuada mauris finibus, elementum massa. Proin lacinia
          mauris quis ligula blandit ullamcorper. Donec ut posuere lorem. In volutpat magna vitae tellus posuere
          pulvinar. Nam varius ligula justo, nec placerat lacus pharetra ac. Aenean massa orci, tristique in nisl ut,
          aliquet consectetur libero. Etiam luctus placerat vulputate. Aliquam ipsum massa, porttitor at mollis ut,
          pretium sit amet mi. In neque mauris, placerat et neque vel, tempor interdum dolor. Suspendisse gravida
          malesuada tellus, vel dapibus nisl dignissim vel. Cras ut nulla sit amet erat malesuada euismod vel a nulla.
        </p>
        </div>
      <img alt="Silhouette of mountains" src="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lkrts1fjoxp0q1hivhr8.jpg" 
    className='img-sticky'
      />
      <div className='ion-padding'>
        <p>
          Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet turpis sit amet massa viverra maximus.
          Aenean venenatis porttitor pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor non. Etiam libero
          odio, sodales in velit a, faucibus venenatis erat. Ut convallis sit amet urna in ultrices. Cras neque est,
          vehicula sed lorem ac, placerat commodo elit. Praesent turpis metus, elementum eget iaculis ac, elementum in
          odio. Nunc et elit faucibus, condimentum mauris consequat, ornare dolor. Sed ac lectus a est blandit tempor.
          Etiam lobortis tristique maximus.
        </p>
      </div>
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
