import React, { useState } from "react";
import Convertidor from "./Convertidor";
import StepperControl from "./StepperControl";
import StepsDisplay from "./StepsDisplay";


export default function Stepper (){
    
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Cotiza",
        "Elije tus cuentas",
        "Transfiere",
        "Completa Transacción",
      ];

    const displayStep = (step) => {
    switch (step) {
        case 1:
            return <Convertidor />;
        case 2:
            return (<div>Step02</div>);
        case 3:
            return (<div>Step03</div>);
        case 4:
            return (<div>Step04</div>);
        default:
            return (<div>No hay Step</div>);
    }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;
    
        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
      };
    
    return(
        <div>
            <StepsDisplay steps={steps} currentStep={currentStep}/>

            {
                displayStep(currentStep)
            }

            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
    );   
}