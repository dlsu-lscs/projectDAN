import React from 'react';

import TableComponent from '../../components/TableComponent/TableComponent';
import RadarComponent from '../../components/RadarComponent/RadarComponent'

export const template = (component) => {
    let { document, data, editable } = component.state;
    // console.log(data)
    return (
        <section className = "orgres-container">
            <div className = "header-section section-card">
                <div className = "header-wrapper">
                    <div className = "title-section">
                        {document.ActivityTitle}
                    </div>
                    <div className = "lastedit-section">
                        Last updated {document.LastEdited}
                    </div>

                    <div className = "header-options">
                        <div className = "filter-toggle-container">
                            <div className = "filter-toggle"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "page-wrapper">
                <div className = "content-section section-card">
                    <div className = "content-title"><span className = "content-title-span">ORGRES Survey Data</span></div>
                    <RadarComponent
                        document = {document}>
                    </RadarComponent>
                    <TableComponent 
                        headers = {["Survey Questions", "1", "2", "3", "4", "5"]}
                        rows = {data}
                    ></TableComponent>
                    <div>
                        <button 
                            id = "SaveChanges"
                            className = "orgres-controls"
                            onClick = {component.changeEditable}
                            hidden = {!editable}>
                        Save Changes
                        </button>
                        <button 
                            id = "ToggleUpdate"
                            className = "orgres-controls"
                            onClick = {component.changeEditable}
                            hidden = {editable}>
                        Update
                        </button>
                        <button 
                            id = "Cancel"
                            className = "orgres-controls"
                            onClick = {component.changeEditable}
                            hidden = {true}>
                        Cancel
                        </button>
                    </div>
                </div>
                
            </div>

            
        </section>
    );
}