import { connect } from 'react-redux';
import React, { Component } from 'react';

class CandidateInformationContainer extends Component {

    render() {
        return (
            <div>
                I am Maharaj
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {}
};

export default connect(mapStateToProps, null)(CandidateInformationContainer);