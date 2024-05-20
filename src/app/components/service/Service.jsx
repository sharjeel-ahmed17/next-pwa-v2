
import React from 'react'
import ServiceItem from './ServiceItem'

const Service = () => {
    return (
        <div className="container mx-auto my-5">
            <h2 className="text-center">Services </h2>
            <div className="row mx-auto w-75">

                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />

            </div>
        </div>
    )
}

export default Service