import StepItem from "./StepItem";

const Steps = ({maxSteps, currentStep, ErrorValidation }) => {

    return (
       <div className={"steps"}>
           {[...Array(maxSteps)].map((val, index) => {
               return <StepItem
                   key={index}
                   number={index}
                   backgroundColor={currentStep >= index
                       ? "green"
                       : ""}
                   error={ErrorValidation === "error" ? "error--animated" : ""}
               />
           }
               )}
       </div>
    );
}

export default Steps;
