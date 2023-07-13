import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({active, setActive, children}) => {
    //remove scroll when modal is active
    function bodyScroll() {
        document.body.classList.toggle('no-scroll')
    }
    return (
        <div className={active ? [cl.myModal, cl.active].join(' ') : cl.myModal}
             onClick={() => {
                setActive(false);
                bodyScroll();
            }}>

            <div className={active ? [cl.myModalContent, cl.active].join(' ') : cl.myModalContent} onClick={e => e.stopPropagation()}>
                <button className={cl.myModalClose} type="button"
                    onClick={() => {
                        setActive(false);
                        bodyScroll();
                    }}>
                    <svg className={cl.myModalSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    )
}

export default MyModal;