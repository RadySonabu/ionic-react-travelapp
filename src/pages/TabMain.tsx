import { IonButton, IonPage } from '@ionic/react'
import React from 'react'
import './TabMain.css';


const TabMain = () => {
  return (
    <IonPage className='bg-page'>
      <img
        src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/317920298_570686721730693_5749635989071114017_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=jx6bOBXE2FAAX89oYdC&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfDkKGGXa_O55grJerW0B5qfHxYPlYEbZwRhZcFlVA9KHQ&oe=657743EC"
        alt="The Wisconsin State Capitol building in Madison, WI at night"
        className=''
      ></img>
      <IonButton href='/tab0' color={'success'} id="open-modal" expand="block">
          Proceed
    </IonButton>
  </IonPage>
    
  )
}

export default TabMain