import { action, Action } from "easy-peasy";


export interface AuthModel {
    isAuth: boolean,
    set: Action<AuthModel, boolean | void>
}

const auth: AuthModel = {
    isAuth: true,
    set: action((state, payload: boolean) => {
        state.isAuth = payload
    })
}

export default auth;