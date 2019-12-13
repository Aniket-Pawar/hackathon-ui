import axios from 'axios';
import { setCandidateList } from '../../Candidate/CandidateList/Redux/Actions';

export function submitSearchCriteria(url, history, skillRequirement, totalExperience, highestEducation, role) {
    return (dispatch) => {
        axios.get(url, {
            params: {
                skillRequirement,
                totalExperience,
                highestEducation,
                role
            }
        }).then(response => {
            console.log('Response of search criteria submission API: ' + JSON.stringify(response));
            dispatch(setCandidateList(response.data));
            history.push('/candidates')
        }).catch(error => {
            console.error('Error in search criteria submission API : ' + JSON.stringify(error));
        });
    };
}