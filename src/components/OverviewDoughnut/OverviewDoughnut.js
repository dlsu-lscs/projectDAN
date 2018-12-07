import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const OverviewDoughnut = props => <Doughnut data={props.data} options={props.options}/>

export default OverviewDoughnut;