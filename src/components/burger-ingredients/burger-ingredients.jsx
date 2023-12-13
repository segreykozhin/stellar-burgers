import ingredients from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../ingredient-card/ingredient-card';
import React from 'react';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const BurgerIngredients = ({handleOpen, handleIngredientClose, data, modalState}) => {

   const buns = data.filter((item) => item.type ==='bun');
   const sauces = data.filter((item) => item.type ==='sauce');
   const mains = data.filter((item) => item.type ==='main');

   const [current, setCurrent] = React.useState('Булки');



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
                     <IngredientCard handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
                <p className='text text_type_main-medium' >Соусы</p>
                <div className={`${ingredients.items} pt-6 pr-4 pl-4`}>
                {sauces.map((ingredient) => (
                     <IngredientCard handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
                <p className='text text_type_main-medium' >Начинка</p>
                <div className={`${ingredients.items} pt-6 pr-4 pl-4`}>
                {mains.map((ingredient) => (
                     <IngredientCard handleOpen={handleOpen} ingredient={ingredient} key={ingredient._id} />
                    ))}
                </div>
            </div>
                    

            {
                modalState.isVisible ?
                <Modal handleClose={handleIngredientClose}>
                    {<IngredientDetails ingredientData={ modalState.data }/>}
                </Modal> :
                null
            }
        </div>

    );
}

export default BurgerIngredients;