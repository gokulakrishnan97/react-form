import React from 'react';
import {Route, Redirect} from 'react-router-dom';


const ProtectedComponent = ({component,...rest})=> {
    console.log(component);
    console.log(rest)
    let RenderedComponent = component;
    return(
        <Route
            {...rest}
            render = { (props) =>{
                return true ?
                    (<RenderedComponent {...props}/>):
                    (<Redirect to= {{
                        pathname: '/login'
                    }} 
                    />
                    )
            }
            }
            />
    )
}

export default ProtectedComponent;