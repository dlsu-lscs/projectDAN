import React from 'react';
export const template = (component) => {
    let { document } = component.state;
    return (
        <section className = "document-container">
            <div className = "header-section section-card">
                <div className = "header-wrapper">
                    <div className = "title-section">
                        {document.ActivityTyle}
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
                    <div className = "content-title"><span className = "content-title-span">Activity Stage</span></div>
                    <div className = "stage-canvas">
                        <div className = "stage-pipe gen-pipe"></div>
                        <div className = "stage-block b1">
                            <div className = "block">
                                <div className = "block-node"></div>
                            </div>
                            <div className = "stage-header">Submitted Pre-acts</div>
                        </div>

                        <div className = "stage-block b2">
                            <div className = "block"> 
                                <div className = "block-node"></div>
                            </div>
                            <div className = "stage-header">Submitted Post-acts</div>
                        </div>

                        <div className = "stage-block b3">
                            <div className = "block"> 
                                <div className = "block-node hidden"></div>
                            </div>
                            <div className = "stage-header">Completed</div>
                        </div>

                        <div className = "gen-pipe green-pipe stage-2"></div>

                    </div>
                </div>

                <div className = "section-card content-section">
                    <div className = "content-title"><span className = "content-title-span">General Information</span></div>
                    <div className = "gen-info-section">
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Duration</div>
                                <div className = "gen-info-content t2">Multiple dates</div>
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Date(s)</div>
                                <div className = "gen-info-content t2">
                                    <div>September 22, 2018 </div>
                                    <div>October 6, 2018 </div>
                                </div>
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Time</div>
                                <div className = "gen-info-content t2">
                                    <div>15:00 - 21:00 </div>
                                    <div>15:00 - 21:00 </div>
                                </div>
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Venu</div>
                                <div className = "gen-info-content t2">G204</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}