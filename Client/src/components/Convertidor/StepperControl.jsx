import React, { useState, useEffect, useRef } from "react";

export default function StepperControl ({ handleClick, currentStep, steps }){

    return(
        <div>
            <button onClick={() => handleClick()}>Back</button>
            <button onClick={() => handleClick("next")}>
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
        </div>
    )
}