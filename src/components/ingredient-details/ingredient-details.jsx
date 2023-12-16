import details from './ingredient-details.module.css'
import PropTypes from 'prop-types';

const IngredientDetails = ({ingredientData}) => {
    return (
        <div className={`${details.container}`}>
            <div className={details.title}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
            </div>
            <img className={details.image} src={ingredientData.image} alt={ingredientData.name} />
            <p className={`${details.name} text text_type_main-medium mt-4`}>{ingredientData.name}</p>
            <ul className={details.box}>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientData.calories}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientData.proteins}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientData.fat}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredientData.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredientData: PropTypes.object.isRequired
}

export default IngredientDetails;