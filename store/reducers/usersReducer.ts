type Link = {
    id: number
}
type Users = {
    id?: {
        favourites: number[]
    }
}

const usersReducerDefaultState: Users = {};

const ADD_FAVOURITE_LINK = 'ADD_FAVOURITE_LINK';
const REMOVE_FAVOURITE_LINK = 'REMOVE_FAVOURITE_LINK';

interface AddFavouriteLinkAction {
    type: typeof ADD_FAVOURITE_LINK,
    link: Link,
    userId: number
}

interface RemoveFavouriteLinkAction {
    type: typeof REMOVE_FAVOURITE_LINK,
    link: Link,
    userId: number
}

type UsersActionTypes = AddFavouriteLinkAction | RemoveFavouriteLinkAction

export const addFavouriteLink = (link: Link, userId: number): AddFavouriteLinkAction => ({
    type: ADD_FAVOURITE_LINK,
    link,
    userId
})

export const removeFavouriteLink = (link: Link, userId: number): RemoveFavouriteLinkAction => ({
    type: REMOVE_FAVOURITE_LINK,
    link,
    userId
})

const currentUserReducer = (state = usersReducerDefaultState, action: UsersActionTypes): Users => {
    switch (action.type) {
        case "ADD_FAVOURITE_LINK":
            if (state[action.userId]) {
                return {
                    ...state,
                    [action.userId]: {
                        favourites: [...state[action.userId].favourites, action.link.id]
                    }
                }
            }
            else {
                return {
                    ...state,
                    [action.userId]: {
                        favourites: [action.link.id]
                    }
                }
            }
        case "REMOVE_FAVOURITE_LINK":
            return {
                ...state,
                [action.userId]: {
                    favourites: state[action.userId].favourites.filter(item => item !== action.link.id)
                }
            }
        default:
            return state;
    }
};

export default currentUserReducer;