import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol, IonButton, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 19.99 },
    { id: 3, name: 'Product C', price: 5.99 },
  ];

  const cartItemCount = 3; // Replace with your actual logic to get cart item count

  const openCart = () => {
    // Implement your open cart logic here
  };

  const addToCart = (product: any) => {
    // Implement your add to cart logic here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Ionic content */}
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton onClick={openCart} id="cart">
            <div className="cart-length">{cartItemCount}</div>
            <IonIcon name="cart" className="cart-icon"></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonList>
          {products.map(p => (
            <IonCard key={p.id}>
              <IonCardHeader>
                <IonCardTitle>{p.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow className="ion-align-items-center">
                  <IonCol size="8">
                    <IonLabel color="secondary">
                      <b>{p.price.toLocaleString('en-US', { style: 'currency', currency: 'CAD' })}</b>
                    </IonLabel>
                  </IonCol>
                  <IonCol size="4" className="ion-text-right">
                    <IonButton fill="clear" onClick={() => addToCart(p)}>
                      <IonIcon name="add"></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Products;
