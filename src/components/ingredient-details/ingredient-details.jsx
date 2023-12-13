import details from './ingredient-details.module.css'

const IngredientDetails = (data) => {
    return (
        <div className={`${details.container}`}>
            <div className={details.title}>
                <h2 className="text text_type_main-large">Детали ингредиента</h2>
            </div>
            <img className={details.image} src={data.image} alt={data.name} />
            <p style={{textAlign: "center"}} className="text text_type_main-medium mt-4">{data.name}</p>
            <ul className={details.box}>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                </li>
                <li className={details.item}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

export default IngredientDetails;