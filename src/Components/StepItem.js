
const StepItem = ({backgroundColor, error, number}) => {
    return (
        <div
            className={
                `steps__item 
                steps__item-${number} 
                ${error} ${backgroundColor}`}/>
    );
}

export default StepItem;
