import axios from 'axios';
import { SET_CANDIDATE_LIST } from './Constants';

function setCandidateList(candidateList) {
    return {
        type: SET_CANDIDATE_LIST,
        candidateList
    }
}