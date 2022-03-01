
const Modal = ({isOpen,setIsOpen,children}) => {
    return isOpen &&
        <div onClick={()=>setIsOpen(false)} className={"modal"}>
            <div onClick={(e)=> e.stopPropagation()} className={"modal__content"}>
                {children}
            </div>
        </div>

}

export default Modal;
