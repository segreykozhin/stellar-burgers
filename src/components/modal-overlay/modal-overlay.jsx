import overlay from './modal-overlay.module.css';

const ModalOverlay = ({handleClose}) => {
    return (
        <div className={overlay.overlay} onClick={handleClose}></div>
    );
}

export default ModalOverlay;