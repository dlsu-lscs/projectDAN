import React from 'react';
export const template = (component) => {
    let { login, logout } = component.state;
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
                    <div  className = "right-options right-opt" onClick = {login}>Login</div>
                </span>:
                <span className = "sign-out-opts">
                    <div className = "right-options right-opt" onClick = {logout}>Signout</div>
                    <div  className = "right-options" >
                        <div className = "usr-img"
                        style = {{"backgroundImage": "url("+user.image.url+")"}}></div> 
                        {user.name.givenName}
                    </div>
                </span>
                }
            </div>
           </div>
        </section>
    );
}