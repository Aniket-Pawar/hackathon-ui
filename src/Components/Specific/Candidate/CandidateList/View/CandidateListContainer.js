import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

class CandidateListContainer extends Component {

    handleRankingOfCandidates = () => {
        console.log('Analysing shortlisted candidates further...');
    }

    render() {
        const { candidateList } = this.props;
        const columnsMetadata = [
            {
                name: 'ID',
                selector: 'id',
                sortable: true,
                cell: row => <div style={{ fontWeight: 700 }}><Link to={`/employee/${row.id}`} >{row.id}</Link></div>
            },
            {
                name: 'First Name',
                selector: 'first_name',
                sortable: true,
            },
            {
                name: 'Last Name',
                selector: 'last_name',
                sortable: true,
                right: true,
            },
            {
                name: 'Age',
                selector: 'age',
                sortable: true,
            },
            {
                name: 'Manager ID',
                selector: 'manager_id',
                sortable: true,
                right: true,
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
                        data={candidateList} />
                </div>
                <div class="text-center">
                    <button type="button" className="btn btn-primary" disabled={!candidateList.length} onClick={this.handleRankingOfCandidates}>Analyse</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        candidateList: state.candidateList || []
    }
};

export default connect(mapStateToProps, null)(CandidateListContainer);