import {UserType} from "../HW8"

type ActionType =
    | { type: "sort"; payload: "up" | "down" }
    | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": { // by name
            if (action.payload === "up") {
                const newState = [...state]
                return newState.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === "down") {
                const newState = [...state]
                return newState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return state
            // need to fix
        }
        case "check": {
            return state.filter(e => e.age >= action.payload) // need to fix
        }

        default:
            return state
    }
}
