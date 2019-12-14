import * as React from "react";
import { connect } from 'react-redux';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingBarSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import SampleBase from './SampleBase';

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

class StackedBarContainer extends SampleBase {

    onChartLoad(args) {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    }

    constructStructuredData = (data) => {
        let analysisDataList = new Array();
        if (data.length) {
            let record = new Array();
            data.forEach(element => {
                if (element.SkillCount !== null && element.SkillCount[0] !== null) {
                    record.push({ x: 'Skill', y: element.SkillCount[0] })
                }
                if (element.TechCount !== null && element.TechCount[0] !== null) {
                    record.push({ x: 'Technology', y: element.TechCount[0] })
                }
                if (element.Leadership !== null && element.Leadership[0] !== null) {
                    record.push({ x: 'Leadership', y: element.Leadership[0] })
                }
                if (element.RolesAndResponsibility !== null && element.RolesAndResponsibility[0] !== null) {
                    record.push({ x: 'Responsibility', y: element.RolesAndResponsibility[0] })
                }
                if (element.FinalScore !== null && element.FinalScore[0] !== null) {
                    record.push({ x: 'Excellence rate', y: element.FinalScore[0] })
                }
                analysisDataList.push(record);
                record = [];
            });
        }
        return analysisDataList;
    }

    constructSeriesComponent = (structuredData, analysisData) => {
        let seriesComponentList = [];
        if (structuredData.length !== 0) {
            structuredData.map((data, index) => {
                seriesComponentList.push(<SeriesDirective dataSource={data} width={2} xName='x' yName='y' name={analysisData[index] && analysisData[index].Name && analysisData[index].Name[0] ? analysisData[index].Name[0] : 'Ramesh'} type='StackingBar' />)
            });
        }
        return (
            <SeriesCollectionDirective>
                {seriesComponentList}
            </SeriesCollectionDirective>
        );
    }

    navigateBack = () => {
        this.props.history.push('/');
    }

    render() {
        const { analysisData } = this.props;
        const structuredData = this.constructStructuredData(analysisData);
        const seriesComponent = this.constructSeriesComponent(structuredData, analysisData);
        const homeButtonSection = (
            <div class="text-center">
                <button type="button" className="btn btn-primary" onClick={this.navigateBack}>Back To Home</button>
            </div>
        );

        return structuredData.length > 0 ?
            (<div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <ChartComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{
                        valueType: 'Category',
                        majorGridLines: { width: 0 }
                    }} width={Browser.isDevice ? '100%' : '60%'} chartArea={{ border: { width: 0 } }} primaryYAxis={{
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        labelFormat: '{value}%',
                        edgeLabelPlacement: 'Shift'
                    }} title='Candidate comparison' loaded={this.onChartLoad.bind(this)} tooltip={{ enable: true }}>
                        <Inject services={[StackingBarSeries, Category, Legend, Tooltip]} />
                        {seriesComponent}
                    </ChartComponent>
                    {homeButtonSection}
                </div>
            </div>) :
            <div className="employeeListContainer">
                No candidates found...
                {homeButtonSection}
            </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        analysisData: state.searchResult.analysisData || []
    }
};

export default connect(mapStateToProps, null)(StackedBarContainer);