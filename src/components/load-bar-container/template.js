import React from 'react';
export const template = (component) => {
    return (
        <section className = "navigation-container">
            <div className = "nav-wrapper">
            
            <div className = "left-options">
                <div className = "proj-title left-options">Project<span className = "dan-title">DAN</span></div>
            </div>
            
            <div className = "right-options">
                    <div  className = "right-options">Loading...</div>
            </div>
           </div>
        </section>
    );
}