import React from 'react';
import SideDrawerComponent from '../../components/SideDrawerComponent/SideDrawerComponent';
import OrgresContainer from '../../smart-components/orgres-container/orgres-container';
export const template = (component) => {
    let { general , aps, details, radarIcon, drawerOn } = component.state;
    return (
        <section className = "document-container">
            <SideDrawerComponent 
                active = {drawerOn}
                untoggle = {component.unSetDrawer}>
                <OrgresContainer id = { 1 }></OrgresContainer>

                <div className = "section-card content-section">
                    <div className = "content-title">ANP</div>
                    <div>Number of Participants</div>
                    <div className = "BarGraph" style = {{width: "100%", height: "100px"}}>
                        <div className = "HiddenBar" style = {{"background-color": "grey", width: "100%", height: "100px", position: "absolute"}}>
                        </div>
                        <div className = "ActiveBar" style = {{"background-color": "red", width: "70%", height: "100px", position: "absolute"}}>
                        </div>
                    </div>
                </div>
            </SideDrawerComponent>
            <div className = "header-section section-card">
                <div className = "header-wrapper">
                    {general?
                    <div>
                    <div className = "title-section">
                        {general.Title}
                    </div>
                    <div className = "lastedit-section">
                        Last updated {general['Last Updated']}
                    </div>

                    <div className = "header-options">
                        <div className = "filter-toggle-container">
                            <div className = "filter-toggle" onClick = {component.setDrawer}><img src = {radarIcon} style = {{height: "35px", width: "35px", "margin-left": "22.5%", "margin-top": "5%"}} alt = "gaphs"></img></div>
                        </div>
                    </div>
                    </div>:
                    <div>
                        <div className = "placeholder" style = {{height: '25px'}}></div>
                        <div className = "placeholder" style = {{width: '80%', height: '20px'}}></div>
                    </div>
                    }
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
                                {aps?
                                <div className = "gen-info-content t2">{aps.Duration}</div>
                                :<div></div>}
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Date(s)</div>
                                {aps?
                                <div className = "gen-info-content t2">
                                    <div>{aps.Dates}</div>
                                    {/* <div>October 6, 2018 </div> */}
                                </div>
                                :<div></div>}
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Time</div>
                                <div className = "gen-info-content t2">
                                    {details?
                                    <div>{details['Activity Time']} </div>:
                                    <div></div>
                                    }
                                    {/* <div>15:00 - 21:00 </div> */}
                                </div>
                        </div>
                        <div className = "gen-info-block">
                                <div className = "gen-info-title t1">Venue</div>
                                {details?
                                <div className = "gen-info-content t2">{details['Activity Venue']}</div>:
                                <div className = "gen-info-content t2"></div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}