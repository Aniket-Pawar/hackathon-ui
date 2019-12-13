import {SET_SEARCH_RESULT} from './Constants';

const initialState = {}

const searchResult = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.searchResult
        default:
            return state;
    }
}

export default searchResult;