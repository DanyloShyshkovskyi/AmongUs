import Button from "./Button";
import {animation} from "../Helpers/Animation";

function ButtonsGrid({onButtonClick, buttonsCombination, isActiveBlock, animationDelay,mainColor}) {
    return (
        <div className={"buttons-grid "+(isActiveBlock ? "active" : "disabled")}>
            {[...Array(16)].map((val, index) => {
                    return <Button
                        key={index}
                        disabled={isActiveBlock ? animationDelay : !isActiveBlock}
                        backgroundColor={isActiveBlock ? mainColor : ''}
                        elementNumber={index}
                        onButtonClick={isActiveBlock ? onButtonClick : undefined}
                        animation={(!isActiveBlock && animationDelay)
                            ? animation(buttonsCombination[index], mainColor)
                            : {}}
                    />
                }
            )}
        </div>
    );
}

export default ButtonsGrid;
