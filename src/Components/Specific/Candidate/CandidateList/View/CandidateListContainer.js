import { connect } from 'react-redux';
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const candidateProperties = ['name', 'score'];

class CandidateListContainer extends Component {

    handleRankingOfCandidates = () => {
        const {history} = this.props;
        history.push('/analysis');
        console.log('Analysing shortlisted candidates further...');
    }

    constructTableRow = (searchResult) => {
        let organisedCandidateList = [];
        let candidateObj = {};
        if (searchResult && searchResult.score && searchResult.score && searchResult.score.length) {
            searchResult.score.forEach((candidate, candidateIndex) => {
                let index = 0;
                candidate.forEach(fieldValue => {
                    if (index < candidateProperties.length) {
                        const propertyName = candidateProperties[index];
                        index++;
                        if (propertyName === 'score') {
                            fieldValue = Math.ceil(fieldValue);
                        }
                        candidateObj[propertyName] = fieldValue;
                    }
                });
                candidateObj.id = candidateIndex + 1;
                organisedCandidateList.push(candidateObj);
                candidateObj = {};
            });
        }
        return organisedCandidateList;
    }

    render() {
        const constructedCandidateList = this.constructTableRow(this.props.searchResult);
        const columnsMetadata = [
            {
                name: 'ID',
                selector: 'id',
                sortable: true
            },
            {
                name: 'Name',
                selector: 'name',
                sortable: true
            },
            {
                name: 'Score',
                selector: 'score',
                sortable: true,
            }
        ];

        return (
            <div>
                <div className="employeeListContainer">
                    <span>
                        List of matching candidates
                    </span>
                    <DataTable
                        columns={columnsMetadata}
                        data={constructedCandidateList} />
                </div>
                <div class="text-center">
                    <button type="button" className="btn btn-primary" disabled={!constructedCandidateList.length} onClick={this.handleRankingOfCandidates}>Analyse</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        searchResult: state.searchResult || {}
    }
};

export default connect(mapStateToProps, null)(CandidateListContainer);