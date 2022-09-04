import React, { useState, useEffect, useRef } from "react";

export default function StepperControl ({ handleClick, currentStep, steps }){

    return(
        
        <div className="d-flex justify-content-center ">
            <button type="button" class="btn btn-dark" onClick={() => handleClick()}>Back</button>
            <button type="button" class="btn btn-dark ms-2"onClick={() => handleClick("next")}>
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
        </div>
    )
}