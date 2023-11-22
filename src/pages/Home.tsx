import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';

import ListJoueur from '../components/ListJoueur';
import './Home.css';
import HeaderKely from '../components/HeaderKely';
import sary from '../components/image/Part-GTY-1771844054-1-1-2.jpg'
const Home: React.FC = () => {
  return (
    <IonPage>
      <HeaderKely />
      <IonContent fullscreen>
        <ListJoueur />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
