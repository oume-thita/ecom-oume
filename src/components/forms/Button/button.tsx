import React from "react"
import * as S from "./styles"

interface IButtons {
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: any
}

const Buttons = ({ children, ...props }: IButtons) => {
  return (
    <S.Button className="btn" {...props}>
      {children}
    </S.Button>
  )
}

export default Buttons
