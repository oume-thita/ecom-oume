import React, {Component} from "react";
import Buttons from "../forms/Button/button";
import * as S from './styles'
import { signInWithGoogle } from "../../firebase/utils";

class SignIn extends Component {

    handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
    }

    render() {
        return (
            <S.SignIn>
                <div className="wrap">
                    <h2>
                        LogIn
                    </h2>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <div className="socialSignin">
                                <div className="row">
                                    <Buttons onClick={signInWithGoogle}>
                                        Sign in with Google
                                    </Buttons>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </S.SignIn>
        )
    }
}

export default SignIn