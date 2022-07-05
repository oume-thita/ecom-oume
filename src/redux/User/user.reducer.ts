// import { Action } from "./action"
import userTypes from "./user.type"

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER:
            return {
                state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;