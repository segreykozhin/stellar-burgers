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

  const [ingredientIsVisible, setIngredientIsVisible] = useState({isVisible: false, data: {}});
  const handleIngredientOpen = (ingredient) => {
    setIngredientIsVisible({isVisible: true, data: {...ingredient}});
  }
  const handleIngredientClose = () => {
    setIngredientIsVisible({isVisible: false, data: {}});
    }

    const [orderIsVisible, setOrderIsVisible] = useState(false);
    const handleOrderOpen = () => {
      setOrderIsVisible({orderIsVisible: true});
    }
    const handleOrderClose = () => {
      setOrderIsVisible(!orderIsVisible);
    }

  // const closeByEscape = (evt) => {
  //   if (evt.key === 'Escape') {
  //     handleIngredientClose();
  //     handleOrderClose();

  //   }
  // }

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          {(data.length!==0)&&!isDataLoading ?
          <>
          <BurgerIngredients modalState={ingredientIsVisible} handleIngredientClose={handleIngredientClose} data={data} handleOpen={handleIngredientOpen} />
          <BurgerConstructor data={data} handleOpen={handleOrderOpen}/></> : null
          }
          {/* {
            ingredientIsVisible ?
            <Modal handleClose={handleIngredientClose}>
              {<IngredientDetails/>}
            </Modal> :
            null
          } */}
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
