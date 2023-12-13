import ingredients from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../ingredient-card/ingredient-card';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BurgerIngredients = ({data}) => {

   const buns = data.filter((item) => item.type ==='bun');
   const sauces = data.filter((item) => item.type ==='sauce');
   const mains = data.filter((item) => item.type ==='main');

   const [current, setCurrent] = useState('Булки');

   const [ingredientData, setIngredientData] = useState({isOpen: false, data: {}});
   const handleOpen = () => {
    setIngredientData({isOpen: true, ...data});
   }
   const handleClose = () => {
    setIngredientData({isOpen: false, data: {}})
   }

//    const [ingredientIsVisible, setIngredientIsVisible] = useState({isVisible: false, data: {}});
//    const handleIngredientOpen = (ingredient) => {
//      setIngredientIsVisible({isVisible: true, data: {...ingredient}});
//    }
//    const handleIngredientClose = () => {
//      setIngredientIsVisible({isVisible: false, data: {}});
//      }

    return (
        <div className={`${ingredients.container} custom-scroll`}>
          <h2 className='text text_type_main-large pt-10 pb-5' >Соберите бургер</h2>
          <div className={ingredients.tab}>
             <Tab value="Булки" active={current ==='Булки'} onClick={setCurrent}>
                Булки
             </Tab>
             <Tab value="Соусы" active={current ==='Соусы'} onClick={setCurrent}>
                Соусы
             </Tab>
             <Tab value="Начинки" active={current ==='Начинки'} onClick={setCurrent}>
                Начинки
             </Tab>
          </div>
            <div className={`${ingredients.scroll} custom-scroll`}>
                <p className='text text_type_main-medium' >Булки</p>
                <div className={`${ingredients.items} pt-6 pr-4 pl-4 `}>
                    {buns.map((ingredient) => (
                     <IngredientCard setIngredientData={setIngredientData} handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
                <p className='text text_type_main-medium' >Соусы</p>
                <div className={`${ingredients.items} pt-6 pr-4 pl-4`}>
                {sauces.map((ingredient) => (
                     <IngredientCard setIngredientData={setIngredientData} handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
                <p className='text text_type_main-medium' >Начинка</p>
                <div className={`${ingredients.items} pt-6 pr-4 pl-4`}>
                {mains.map((ingredient) => (
                     <IngredientCard setIngredientData={setIngredientData} handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
            </div>
                    

            {
                ingredientData.isOpen ?
                <Modal handleClose={handleClose}>
                    {<IngredientDetails ingredientData={ ingredientData.data }/>}
                </Modal> :
                null
            }
        </div>

    );
}

// BurgerIngredients.propTypes = {
//     handleOpen:PropTypes.func.isRequired,
//     handleIngredientClose:PropTypes.func.isRequired,
//     modalState: PropTypes.object.isRequired,
//     data: PropTypes.array
// }

export default BurgerIngredients;