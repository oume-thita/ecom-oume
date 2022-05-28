import React from "react";
import Logo from '../../assets/logo.png'
import * as S from './styles'

const Header = () => {
    return (
        <S.Header>
            <S.Wrap>
                <S.Logo>
                    <S.Image src={Logo} alt="LOGO" />
                </S.Logo>
            </S.Wrap>
        </S.Header>
    )
}

export default Header