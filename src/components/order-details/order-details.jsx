import React from "react";
import details from './order-details.module.css'
import accepted from '../../images/order accpeted/image 1.png'

const OrderDetails = () => {

    return (
        <div className={`${details.container}`}>
            <h2 
            className={`${details.title} text text_type_digits-large pt-20`}>
                034536
            </h2>
            <p className="text text_type_main-medium pt-8 pb-15">
                идентификатор заказа
            </p>
            <img
            src={accepted} 
            alt="accepted" />
            <p className="text text_type_main-default pt-15 pb 2">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive pb-20">Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

export default OrderDetails;