import {SET_CANDIDATE_LIST} from './Constants';

const initialState = [];

const candidateList = (state = initialState, action) => {
    switch (action.type) {
        case SET_CANDIDATE_LIST:
            return action.candidateList
        default:
            return state;
    }
}

export default candidateList;