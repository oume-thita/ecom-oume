import React from "react"
// import { IFormInput } from "../../../types"
import * as S from "./styles"

interface FormProps {
  label?: string
  //   form: IFormInput
  handleChange?: any
  type: string
  name: string
  value: { value: string }
  placeholder: string
  onChange: any
}

const FormInput: React.FC<FormProps> = ({
  handleChange,
  label,
  type,
  name,
  value,
  onChange,
  ...otherProps
}: FormProps) => {
  return (
    <S.FormRow>
      {label && <label>{label}</label>}

      <input className="formInput" onChange={handleChange} {...otherProps} />
    </S.FormRow>
  )
}

export default FormInput
