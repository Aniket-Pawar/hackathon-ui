import axios from 'axios';
import { SET_SEARCH_RESULT } from './Constants';

export function setSearchResult(searchResult) {
    return {
        type: SET_SEARCH_RESULT,
        searchResult
    }
}