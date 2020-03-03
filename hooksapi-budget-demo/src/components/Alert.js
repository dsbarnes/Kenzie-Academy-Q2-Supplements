import React from 'react'

const Alert = ({type, text}) => {
    return (
        <React.Fragment>
           <div className={`alert alert-${type}`}>
               {text}
           </div>
        </React.Fragment>
    )
}
export default Alert