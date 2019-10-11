import React, {Fragment} from 'react'
import ReactStopwatch from 'react-stopwatch'

export default function Stopwatch(props) {
    return (
        <Fragment>
            <h5>Секундомер</h5>
            <span className='card text-white bg-dark mb-3 rounded-0' style={{maxWidth: '10rem'}}>
            <ReactStopwatch
                seconds={0}
                minutes={0}
                hours={0}
                limit={false}
                render={({ formatted }) => {
                    return (
                    <div className='card-body'>
                        <p className='card-text'>{ formatted }</p>
                    </div>
                    );
                }}
            />
            </span>
        </Fragment>
    )
}