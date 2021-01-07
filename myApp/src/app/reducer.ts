import { Action } from "@ngrx/store"

export interface IState {
    users: any[]
}

export function MyReducer(state: IState = {users: []}, action: any) {

    debugger
    switch(action.type) {
        case "ADD":
            return {...state, users: [...state.users, action.payload]}
        case "UPDATE":
            let i = state.users.findIndex(u => u.id == action.payload.id)
            if(i >= 0) {
                let arr = [...state.users]
                arr[i] = action.payload
                return {...state, users: arr}
            }
            return state
        case "DELETE":
            let j = state.users.findIndex(u => u.id == action.payload)
            if(j >= 0) {
                let arr = [...state.users]
                arr.splice(j, 1)
                return {...state, users: arr}
            }
            return state
        default: return state
    }
}