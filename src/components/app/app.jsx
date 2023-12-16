import { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const api = 'https://norma.nomoreparties.space/api/ingredients ';

function App() {
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isDataError, setIsDataError] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    setIsDataError(false);
    fetch(api)
      .then((res) => {
        if (res.ok)
          { return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(res => setData(res.data))
      .catch(() => setIsDataError(true))
      .finally(() => setIsDataLoading(false))
  },[]);

  console.log(data)

  const [modalIngredient, setModalIngredient] = useState(null);
  const closeIngredientModal = () => {
      setModalIngredient(null);
  }
  const openIngredientModal = (ingredient) => {
  setModalIngredient(ingredient)
  }

    const [orderIsVisible, setOrderIsVisible] = useState(false);
    const openOrderModal = () => {
      setOrderIsVisible(true);
    }
    const closeOrderModal = () => {
      setOrderIsVisible(false);
    }

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          {(data.length!==0)&&!isDataLoading ?
          <>
          <BurgerIngredients handleOpen={openIngredientModal} handleClose={closeIngredientModal} modalIngredient={modalIngredient} data={data} />
          <BurgerConstructor data={data} handleOpen={openOrderModal}/></> : null
          }
          {
            orderIsVisible ?
            <Modal handleClose={closeOrderModal}>
              {<OrderDetails />}
            </Modal> :
            null
          }
        </main>
    </div>
  );
}

export default App;
