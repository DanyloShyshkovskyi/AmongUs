
const Success = ({setIsOpen}) => {
    return (
        <div id="success-box">
            <div onClick={()=>setIsOpen(false)} className="dot"/>
            <div className="face">
                <div className="eye"/>
                <div className="eye right"/>
                <div className="mouth happy"/>
            </div>
            <div className="shadow scale"/>
            <div className="message"><h1 className="alert">Success!</h1><p>yay, you won</p></div>
            <button onClick={()=>setIsOpen(false)} className="button-box"><h1 className="green">continue</h1></button>
        </div>
    );
}

export default Success;
