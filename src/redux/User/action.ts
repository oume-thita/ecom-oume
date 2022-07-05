import userTypes from "./user.type";

export const setCurrentUser = (user:any) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

// export type Action = typeof setCurrentUser