import header from'./app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
    return (
        <header className={`${header.container} pt-4 pb-4`}>
            <nav className={header.nav}>
                <a href="#" className={`${header.link} pl-5 pr-5 pb-4 pt-4`}>
                    <BurgerIcon type='primary' />
                    <p className='pl-2 text text_type_main-default m-0'>Конструктор</p>
                </a>
                <a href="#" className={`${header.link} ml-2 pl-5 pr-5 pb-4 pt-4`}>
                    <ListIcon type='secondary' />
                    <p className='pl-2 text text_type_main-default text_color_inactive m-0'>Лента заказов</p>
                </a>
                <a href="#" className={header.logo}>
                    <Logo />
                </a>
                <a href="#" className={`${header.link} pl-5 pr-5 pb-4 pt-4`}>
                    <ProfileIcon type='secondary' />
                    <p className='pl-2 text text_type_main-default text_color_inactive m-0'>Личный кабинет</p>
                </a>
            </nav>
        </header>
    );

}

export default AppHeader;