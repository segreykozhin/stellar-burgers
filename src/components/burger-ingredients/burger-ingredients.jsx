import ingredients from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientCard from '../ingredient-card/ingredient-card';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BurgerIngredients = ({handleOpen, handleClose, modalIngredient, data}) => {

   const buns = data.filter((item) => item.type ==='bun');
   const sauces = data.filter((item) => item.type ==='sauce');
   const mains = data.filter((item) => item.type ==='main');

   const [current, setCurrent] = useState('Булки');

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
            modalIngredient && <Modal handleClose={handleClose}>
                    {<IngredientDetails ingredientData={modalIngredient}/>}
                </Modal>
            }
        </div>

    );
}

BurgerIngredients.propTypes = {
    handleOpen:PropTypes.func.isRequired,
    handleClose:PropTypes.func.isRequired,
    modalIngredient: PropTypes.object,
    data: PropTypes.array
}

export default BurgerIngredients;