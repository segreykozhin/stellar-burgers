import item from './constructor-item.module.css';
import { CurrencyIcon, LockIcon, DeleteIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorItem = ({ingredient}) => {
    return (
        <li className={item.container}>
            <img className={item.image} src={ingredient.image} alt={ingredient.name} />
            <p style={{maxWidth: '254px'}} className='text text_type_main-default mr-5'>{ingredient.name}</p>
            <div style={{display: 'flex'}} className='mr-5'>
                <p className='text text_type_digits-default mr-2'>{ingredient.price}</p>
                <CurrencyIcon style={{width: '24', height: '24'}} className='mr-5' type='primary'/>
            </div>
            <DeleteIcon type="primary" />
        </li>
    );
}

export default ConstructorItem;