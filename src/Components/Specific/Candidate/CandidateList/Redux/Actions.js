import axios from 'axios';
import { SET_CANDIDATE_LIST } from './Constants';

export function setCandidateList(candidateList) {
    return {
        type: SET_CANDIDATE_LIST,
        candidateList
    }
}