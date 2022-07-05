import React from "react";
import * as S from "./styles"

const Buttons = ({children, ...props}:any) => {
    return (
        <S.Button className="btn" {...props}>
            {children}
        </S.Button>
    )
}

export default Buttons