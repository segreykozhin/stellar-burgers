import constructor from './burger-constructor.module.css';
import {Button, CurrencyIcon, ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import bun from '../../images/bun-02.png';
import PropTypes from 'prop-types';

// data.filter((item) => item.type ==='bun')


const BurgerConstructor = ({handleOpen, data}) => {
    const ingredients = data.filter((item) => item.type !=='bun');

    return (
        <div>
            <div className={constructor.container}>
                <span className='ml-8'>
                    <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={bun}/>
                </span>
                <ul className={`${constructor.list} custom-scroll`}>
                    {ingredients.map((ingredient) => (
                        <li key={ingredient._id} className={constructor.item}>
                            <DragIcon type="primary" />
                            <ConstructorElement 
                            price={ingredient.price} 
                            thumbnail={ingredient.image} 
                            text={ingredient.name}/>
                        </li>
                    ))}
                </ul>
                <span className='ml-8'>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={bun}/>
                </span>
            </div>
            <div className={constructor.total}>
                    <p className='mr-2 text text_type_digits-medium'>610</p>
                    <CurrencyIcon
                    type='primary'/>
                    <div className='pr-10'></div>
                    <Button onClick={handleOpen}
                    htmlType='button'
                    type='primary'
                    size='large'>
                        Оформить заказ
                    </Button>
            </div>
        </div>
    );
}

BurgerConstructor.propTypes = {
    handleOpen: PropTypes.func.isRequired,
    data: PropTypes.array
}

export default BurgerConstructor;