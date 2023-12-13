import React from "react";
import details from './order-details.module.css'
import accepted from '../../images/order accpeted/image 1.png'

const OrderDetails = () => {

    return (
        <div className={`${details.container}`}>
            <h2 
            style={{textShadow: '0px 4px 32px rgba(51, 51, 255, 0.50), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 0px 16px rgba(51, 51, 255, 0.25)'}}
            className="text text_type_digits-large pt-20">
                034536
            </h2>
            <p className="text text_type_main-medium pt-8 pb-15">
                идентификатор заказа
            </p>
            <img 
            style={{width: 120, marginLeft: 'auto', marginRight: 'auto'}} 
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