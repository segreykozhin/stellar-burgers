import { useState, useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
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
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(() => setIsDataError(true))
      .finally(() => setIsDataLoading(false))
  },[]);

  console.log(data)

  const [modalIngredient, setModalIngredient] = useState(null);
  const handleClose = () => {
      setModalIngredient(null);
  }
  const handleOpen = (ingredient) => {
  setModalIngredient(ingredient)
  }

    const [orderIsVisible, setOrderIsVisible] = useState(false);
    const handleOrderOpen = () => {
      setOrderIsVisible({orderIsVisible: true});
    }
    const handleOrderClose = () => {
      setOrderIsVisible(!orderIsVisible);
    }

    const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      handleOrderClose();
      handleClose();
    }
  }

  return (
    <div onKeyDown={closeByEscape} className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          {(data.length!==0)&&!isDataLoading ?
          <>
          <BurgerIngredients closeByEscape={closeByEscape} handleOpen={handleOpen} handleClose={handleClose} modalIngredient={modalIngredient} data={data} />
          <BurgerConstructor data={data} handleOpen={handleOrderOpen}/></> : null
          }
          {
            orderIsVisible ?
            <Modal handleClose={handleOrderClose}>
              {<OrderDetails />}
            </Modal> :
            null
          }
        </main>
    </div>
  );
}

export default App;
