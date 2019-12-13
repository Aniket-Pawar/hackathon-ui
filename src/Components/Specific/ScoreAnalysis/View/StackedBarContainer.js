import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingBarSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import SampleBase from './SampleBase';

export let data1 = [{ x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 }, { x: 'Apr', y: 15.5 },
{ x: 'May', y: 20 }, { x: 'Jun', y: 24 }];

export let data2 = [{ x: 'Jan', y: 6 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 11 }, { x: 'Apr', y: 16 },
{ x: 'May', y: 21 }, { x: 'Jun', y: 25 }];

export let data3 = [{ x: 'Jan', y: -1 }, { x: 'Feb', y: -1.5 }, { x: 'Mar', y: -2 }, { x: 'Apr', y: -2.5 },
{ x: 'May', y: -3 }, { x: 'Jun', y: -3.5 }];

export let data4 = [{ x: 'Jan', y: -4 }, { x: 'Feb', y: 2.5 }, { x: 'Mar', y: 4 }, { x: 'Apr', y: -4.5 },
{ x: 'May', y: 1 }, { x: 'Jun', y: -1.5 }];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;

class StackedBarContainer extends SampleBase {

    onChartLoad(args) {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    }

    render() {
        return (<div className='control-pane'>
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
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data1} width={2} xName='x' yName='y' name='Apple' type='StackingBar' />
                        <SeriesDirective dataSource={data2} width={2} xName='x' yName='y' name='orange' type='StackingBar' />
                        <SeriesDirective dataSource={data3} width={2} xName='x' yName='y' name='Wastage' type='StackingBar' />
                        <SeriesDirective dataSource={data4} width={2} xName='x' yName='y' name='Mango' type='StackingBar' />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
    }
}

export default StackedBarContainer;