interface User {
    email: string,
    familyName: string,
    givenName: string,
    id: string,
    name: string,
    photoUrl: string,
    accessToken: string
}

const currentUserReducerDefaultState: User = {};

const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER'

interface SetUserAction {
    type: typeof SET_USER,
    user: User
}

interface SetClearUser {
    type: typeof CLEAR_USER
}

type UserActionTypes = SetUserAction | SetClearUser

export const setUser = (user: User): SetUserAction => ({
    type: SET_USER,
    user
})

export const clearUser = (): SetClearUser => ({
    type: CLEAR_USER
})

const currentUserReducer = (state = currentUserReducerDefaultState, action: UserActionTypes): User => {
    switch (action.type) {
        case "SET_USER":
            return action.user
        case "CLEAR_USER":
            return currentUserReducerDefaultState
        default:
            return state;
    }
};

export default currentUserReducer;