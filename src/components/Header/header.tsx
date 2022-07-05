import React from "react";
import { connect } from "react-redux";
import Logo from '../../assets/logo.png'
import * as S from './styles'
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { userInfo } from "os";

const Header = (props:any) => {
    const { currentUser } = props
    // console.log(auth)
    return (
        <S.Header>
            <S.Wrap>
                <S.Logo>
                    <Link to="/">
                        <S.Image src={Logo} alt="LOGO" />
                    </Link>
                </S.Logo>
                <div className="callToActions">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={()=>auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                        <li>
                            <Link to="/">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                        </ul>
                    )}                   
                </div>
            </S.Wrap>
        </S.Header>
    )
}

Header.defaultProps = {
    currentUser: null
}

const mapStateToProps = ({user}:any) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);