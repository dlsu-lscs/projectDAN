import React from 'react';

import TableComponent from '../../components/TableComponent/TableComponent';

export const template = (component) => {
    let { document, results, editable } = component.state;
    
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
                    <div className = "content-title"><span className = "content-title-span">ORGRES Survey Results</span></div>
                    <TableComponent 
                        headers = {["Survey results", "1", "2", "3", "4", "5"]}
                        rows = {results}
                    ></TableComponent>
                </div>
            </div>

            <div className = "orgres-controls">
                <button id = "ToggleUpdate" onClick = {component.changeEditable}>{editable ? "Save Changes" : "Update"}</button>
                {/* <button id = "Cancel" onClick = {component.changeEditable} hidden = {!editable}>Cancel</button> */}
            </div>
        </section>
    );
}