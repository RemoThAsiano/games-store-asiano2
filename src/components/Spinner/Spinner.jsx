import React  from 'react'
import { spinnerStyle } from './SpinnerStyle'

const Spinner = () => {

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-border text-dark' role='status' style={spinnerStyle}></div>
            </div>
        }
        </>
    )
}

export default Spinner