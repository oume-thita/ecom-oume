import React, { Component } from "react";
import * as S from './styles'

import { auth, handleUserProfile } from "../../firebase/utils";

import FormInput from "../forms/FormInput/formInput";
import Button from "../forms/Button/button";

// interface UserState {
//     displayName: string,
//     email: string,
//     password: string,
//     confirmPassword: string,
// }

var initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


class Signup extends Component<{}, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {

        const { target: { name, value } } = e
        const newState = { [name]: value };
        this.setState(newState)
    }

    handleFormSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword, errors}  = this.state;

        if (password !== confirmPassword) {
            const err =['Password Don\'t match'];
            this.setState({
                errors:err
            });
            return;
        }
    }

    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;

        return (
            <S.Signup>
                <div className="wrap">
                    <h2>
                        Signup
                    </h2>
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err:any, index:number) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    <div className="formWrap">
                    <form onSubmit={this.handleFormSubmit}>
                        <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full name"
                        onChange = {this.handleChange}
                        />

                        <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange = {this.handleChange}
                        />

                        <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange = {this.handleChange}
                        />

                        <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange = {this.handleChange}
                        />

                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                    </div>
                </div>
            </S.Signup>
        )
    }
}

export default Signup
