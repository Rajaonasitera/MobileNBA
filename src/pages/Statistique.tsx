import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import sary from '../components/image/Part-GTY-1771844054-1-1-2.jpg'
import './Statistique.css'
import HeaderKely from '../components/HeaderKely';
const Statistique: React.FC = () => {
  return (
    <IonPage >
        <HeaderKely />
        <IonContent>
    <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Equipe</th>
            <th>Matchs joués eqp</th>
            <th>Matchs joués joueur</th>
            <th>Points par match</th>
            <th>Rebonds par match</th>
            <th>Passes Décisives par match</th>
            <th>% 3pts</th>
            <th>% tirs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Équipe A</td>
            <td>20</td>
            <td>18</td>
            <td>25.5</td>
            <td>7.8</td>
            <td>5.2</td>
            <td>40%</td>
            <td>55%</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Équipe A</td>
            <td>20</td>
            <td>18</td>
            <td>25.5</td>
            <td>7.8</td>
            <td>5.2</td>
            <td>40%</td>
            <td>55%</td>
          </tr>
        </tbody>
      </table>
      </IonContent>
      </IonPage>
  );
};

export default Statistique;
