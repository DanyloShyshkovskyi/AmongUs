import {useState} from "react";

const Button = ({elementNumber, onButtonClick, animation, disabled, backgroundColor}) => {

    const [animationButton, setButtonAnimation] = useState("")

    const onClick = () => {
        setButtonAnimation(onButtonClick(elementNumber) ? "right" : "incorrect")
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={animation}
            onAnimationEnd={() => setButtonAnimation("")}
            className={
                `buttons-grid__item 
                buttons-grid__item-${elementNumber} 
                ${animationButton} ${backgroundColor}`}/>
    );
}

export default Button;
