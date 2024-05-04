import { Signature, SignatureComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import React from "react";

function DigitalPadComponent(){
    let signObj : Signature | null;
    const OnSave=()=>{
        signObj?.save()
    }
    const OnClear=()=>{
        signObj?.clear()
    }
    return (
        <div>
            <div id="actionBtn">
                <ButtonComponent onClick={OnSave}>Save</ButtonComponent>
                <ButtonComponent onClick={OnClear}></ButtonComponent>
            </div>
            <SignatureComponent ref={sign=>signObj = sign}>

            </SignatureComponent>
        </div>
    )
}

export default DigitalPadComponent