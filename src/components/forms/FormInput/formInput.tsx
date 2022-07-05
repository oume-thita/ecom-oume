import React from "react";
import * as S from './styles'

const FormInput = ({handleChange, label, ...otherProps}:any) => {
    return (
        <S.FormRow>
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps} />
        </S.FormRow>
    );
}

export default FormInput