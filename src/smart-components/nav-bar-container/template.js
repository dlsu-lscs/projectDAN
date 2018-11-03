import React from 'react';
export const template = (component) => {
    let { handleSignInClick, handleSignOutClick } = component.state;
    let { user } = component.props;
    return (
        <section className = "navigation-container">
            <div className = "nav-wrapper">
            
            <div className = "left-options">
                <div className = "proj-title left-options">Project<span className = "dan-title">DAN</span></div>
            </div>
            
            <div className = "right-options">
                {!user?
                <span className = "log-in-opts">
                    <div  className = "right-options right-opt" onClick = {handleSignInClick}>Login</div>
                </span>:
                <span className = "sign-out-opts">
                    <div className = "right-options right-opt" onClick = {handleSignOutClick}>Signout</div>
                    <div  className = "right-options" >
                        <div className = "usr-img"
                        style = {{"background-image": "url("+user.image.url+")"}}></div> 
                        {user.name.givenName}
                    </div>
                </span>
                }
            </div>
           </div>
        </section>
    );
}