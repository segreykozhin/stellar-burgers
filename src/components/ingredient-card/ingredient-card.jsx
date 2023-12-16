import card from './ingredient-card.module.css'
import { CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const IngredientCard = ({ingredient, handleOpen}) => {
    

    return (
        <div onClick={()=>{handleOpen(ingredient)}} className={`${card.card}`}>
            <img className={card.image} src={ingredient.image} alt={ingredient.name} />
            <div className={`${card.price} pt-1 pb-1`}>
                <p className='text text_type_digits-medium mr-2'>{ingredient.price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className={`${card.name} text text_type_main-default`} >{ingredient.name}</p>
            <Counter count={1} size="default" extraClass="m-1"/>
        </div>
    );
}

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    handleOpen: PropTypes.func.isRequired
}

export default IngredientCard;