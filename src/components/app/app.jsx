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
  const [dataState, setDataState] = useState({isLoading: false, haveError: false, data: []});

  useEffect(() => {
    const getIngredientsData = () => {
      setDataState({...dataState, isLoading: true});
      fetch(api)
      .then(res => res.json())
      .then(res => setDataState({...dataState, data: JSON.parse(JSON.stringify(res)), isLoading: false}))
      .catch(e => {
        setDataState({...dataState, haveError: true, isLoading: false});
        console.log(`${e}`);
      })
    }
    getIngredientsData();
  },[dataState]);

  

  console.log(dataState.data);

  const [ingredientIsVisible, setIngredientIsVisible] = useState(false);
  const handleIngredientOpen = () => {
    setIngredientIsVisible({ingredientIsVisible: true})
  }
  const handleIngredientClose = () => {
    setIngredientIsVisible(!ingredientIsVisible);
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
  //     handleClose();
  //   }
  // }

  return (
    <div className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients data={dataState} handleOpen={handleIngredientOpen} />
          <BurgerConstructor handleOpen={handleOrderOpen}/>
          {
            ingredientIsVisible ?
            <Modal handleClose={handleIngredientClose}>
              {<IngredientDetails/>}
            </Modal> :
            null
          }
          {
            orderIsVisible ?
            <Modal handleClose={handleOrderClose}>
              {<OrderDetails/>}
            </Modal> :
            null
          }
        </main>
    </div>
  );
}

export default App;
