import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';

const Table = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Table Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Colonne 1</th>
                    <th>Colonne 2</th>
                    <th>Colonne 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Donnée 1-1</td>
                    <td>Donnée 1-2</td>
                    <td>Donnée 1-3</td>
                  </tr>
                  <tr>
                    <td>Donnée 2-1</td>
                    <td>Donnée 2-2</td>
                    <td>Donnée 2-3</td>
                  </tr>
                  {/* Ajoutez d'autres lignes si nécessaire */}
                </tbody>
              </table>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Table;
