import React, { useState } from "react";
import Convertidor from "./Convertidor";
import StepperControl from "./StepperControl";
import StepsDisplay from "./StepsDisplay";
import OperationDetail from "./OperationDetail"
import Transference from "./Transference";
import NavBar from "../Nav/NavProfile"


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
            return <OperationDetail/>;
        case 3:
            return <Transference/>;
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
        <div className="bg-global">
         <NavBar/>
        <div className=" container">
            <div className="d-flex justify-content-center p-5">
              <StepsDisplay steps={steps} currentStep={currentStep}/>  
            </div>
            <div className="d-flex justify-content-center pb-4">
              
            {
                displayStep(currentStep)
            } 
            </div>

            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            /> 
           
        </div>
        </div>
    );   
}