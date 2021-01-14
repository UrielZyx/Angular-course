import { Action } from "@ngrx/store"

export interface IState {
    ex9: any[]
}

export function MyReducer(state: IState = {ex9: []}, action: any) {

    switch(action.type) {
        case "EX9_ADD":
            return {...state, ex9: [...state.ex9, action.payload]}
        case "EX9_UPDATE":
            let i = state.ex9.findIndex(u => u.id == action.payload.id)
            if(i >= 0) {
                let arr = [...state.ex9]
                arr[i] = action.payload
                return {...state, ex9: arr}
            }
            return state
        case "EX9_DELETE":
            let j = state.ex9.findIndex(u => u.id == action.payload)
            if(j >= 0) {
                let arr = [...state.ex9]
                arr.splice(j, 1)
                return {...state, ex9: arr}
            }
            return state
        default: return state
    }
}