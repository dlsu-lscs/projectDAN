import React from 'react';

import InputComponent from '../../components/InputComponent/InputComponent';
import TableComponent from '../../components/TableComponent/TableComponent';

import { _setInputState } from '../../mixins/InputHandlerMixin';
import NumberInputComponent from '../../components/NumberInputComponent/NumberInputComponent';

export const template = (component) => {
    let { document, results } = component.state;
    
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

            <div>
                <button onClick = {component.toggleEditable}>Update</button>
            </div>
        </section>
    );
}