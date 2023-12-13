import details from './ingredient-details.module.css'

const IngredientDetails = ({image, name, proteins, fat, carbohydrates, calories}) => {
    return (
        <div className={`${details.container}`}>
            <div className={details.title}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
            </div>
            <img className={details.image} src={image} alt={name} />
            <p style={{textAlign: "center"}} className="text text_type_main-medium mt-4">{name}</p>
            <ul className={details.box}>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{calories}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{proteins}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{fat}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

export default IngredientDetails;