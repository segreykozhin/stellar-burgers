import constructor from './burger-constructor.module.css';
import {Button, CurrencyIcon, ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import bun from '../../images/bun-02.png';

const BurgerConstructor = ({handleOpen, data}) => {
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
                    {data.map((ingredient) => (
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
                    style={{width: '36px', height: '36px'}}
                    type='primary'/>
                    <Button onClick={handleOpen} style={{marginLeft: '40px'}}
                    htmlType='button'
                    type='primary'
                    size='large' >
                        Оформить заказ
                    </Button>
            </div>
        </div>
    );
}

export default BurgerConstructor;