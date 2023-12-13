import ingredients from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../ingredient-card/ingredient-card';
import React from 'react';

const BurgerIngredients = ({handleOpen, data}) => {

   const buns = data.filter((item) => item.type ==='bun');
   const sauces = data.filter((item) => item.type ==='sauce');
   const mains = data.filter((item) => item.type ==='main');

   const [current, setCurrent] = React.useState('one');

    return (
        <div className={`${ingredients.container} custom-scroll`}>
          <h2 className='text text_type_main-large pt-10 pb-5' >Соберите бургер</h2>
          <div className={ingredients.tab}>
             <Tab value="one" active={current ==='one'} onClick={setCurrent}>
                Булки
             </Tab>
             <Tab value="two" active={current ==='two'} onClick={setCurrent}>
                Соусы
             </Tab>
             <Tab value="three" active={current ==='three'} onClick={setCurrent}>
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
        </div>

    );
}

export default BurgerIngredients;