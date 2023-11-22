import React from "react";
import { IonContent, IonHeader} from "@ionic/react";
import './HeaderKely.css';
import photo from './image/téléchargement.png'

const HeaderKely: React.FC = () => {
    return (
      <IonHeader className="sary">
        <img src= {photo}  alt="" />
        <h1> Statistique des joueurs NBA</h1>
      </IonHeader>
    );
}

export default HeaderKely;