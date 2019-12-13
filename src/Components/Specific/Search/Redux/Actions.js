import axios from 'axios';

export function submitSearchCriteria(url, skillRequirement, totalExperience, highestEducation, role) {
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
        }).catch(error => {
            console.error('Error in search criteria submission API : ' + JSON.stringify(error));
        });
    };
}