import { Action } from "@ngrx/store"

export interface IState {
    users: any[]
}

export function MyReducer(state: IState = {users: []}, action: any) {

    // debugger
    switch(action.type) {
        case "ADD": return {...state, users: [...state.users, action.payload]}
        // case "UPDATE": return {...state, users: [...state.users, action.payload]}
        // case "DELETE": return {...state, users: [...state.users, action.payload]}
        default: return state
    }
}