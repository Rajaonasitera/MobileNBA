import React from "react";
import { IonButton, IonButtons, IonToolbar, IonIcon, IonItem, IonContent } from "@ionic/react";
import './ListJoueur.css'
import sary from './image/197381164_316193676849059_2127543320143516129_n.jpg'
const myList = ['Golden State Warriors', 'Houston Rockets', 'Toronto Raptors'];
const ListJoueur: React.FC = () => {
    return (
        <IonToolbar className="text">
            <img src={sary} alt="" />
            <p>The official site of the National Basketball Association. Follow the action on NBA scores, schedules, stats, news, Team and Player news.</p>
            <h1>Liste des equipes</h1>
            {myList.map((ls,i) => (
                <div>
                <IonButton className="btt">{ls}</IonButton>
                </div>
            ))} 
        </IonToolbar>
        
    );
};

export default ListJoueur;