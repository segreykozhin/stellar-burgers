import card from './ingredient-card.module.css'
import { CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientCard = ({ingredient, handleOpen, setIngredientData}) => {
    setIngredientData({isOpen: true, data: ingredient});

    return (
        <div onClick={handleOpen} className={`${card.card}`}>
            <img className={card.image} src={ingredient.image} alt={ingredient.name} />
            <div className={`${card.price} pt-1 pb-1`}>
                <p className='text text_type_digits-medium mr-2'>{ingredient.price}</p>
                <CurrencyIcon type='primary'/>
            </div>
            <p className='text text_type_main-default' style={{margin: '0 auto'}}>{ingredient.name}</p>
            <Counter count={1} size="default" extraClass="m-1"/>
        </div>
    );
}

export default IngredientCard;