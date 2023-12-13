import modal from './modal.module.css';
import { createPortal }  from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { Button, CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props) => {
    return createPortal(
    <div className={modal.modal}>
        <div className={modal.container}>
        <div className={modal.box}>
                <Button 
                    type='primary'
                    className={modal.close}
                    onClick={props.handleClose} >
                        <CloseIcon type='primary'/>
                </Button>
                {props.children}
            </div>
        </div>
        <ModalOverlay handleClose={props.handleClose}/>
    </div>, document.getElementById('react-modals')
    );
}

export default Modal;