import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './OverviewComponent.css';

import OverviewDoughnut from '../OverviewDoughnut/OverviewDoughnut';

class OverviewComponent extends Component {
  
  render() {

    let { overviewTitle, overviewDescription, submissionsValue, awaitingValue, statsData, statsOptions } = this.props;
    return (
        <section id="overview">
            <div id="overview-title">
                <div id="overview-title-text">{ overviewTitle }</div>
                <div id="overview-subtitle-text">{ overviewDescription }</div>
            </div>

            <div id="overview-summary">
                <div className="stat-number-container">
                    <div className="label">Total Submissions</div>
                    <div id="submissions-value" className="value-container">{ submissionsValue }</div>
                </div>
                <div className="stat-number-container">
                    <div className="label">Awaiting Status</div>
                    <div id="awaiting-value" className="value-container">{ awaitingValue }</div>
                </div>
            </div>
        
            <div id="overview-stats">
                <div className="label">Summary</div>
                {/* <canvas id="chart"></canvas> */}
                <OverviewDoughnut
                    data={ statsData }
                    options={ statsOptions }
                    />
            </div>
        </section>
    );
  }
}

/*
  We use PropTypes to validate the props we give for this class,
  if there is a mistake in assigning a proptype this code would allow us to see the error in the console
*/
OverviewComponent.propTypes = {
    overviewTitle: PropTypes.string.isRequired, 
    overviewDescription: PropTypes.string.isRequired, 
    submissionsValue: PropTypes.number.isRequired, 
    awaitingValue: PropTypes.number.isRequired, 
    statsData: PropTypes.object.isRequired, 
    statsOptions: PropTypes.object.isRequired,
};

export default OverviewComponent;
