import React from 'react'
import TeamItem from './TeamItem'

const Team = () => {
    return (
        <div className="container mx-auto my-5">
            <h2 className="text-center">our team</h2>
            <div className="row">
                <TeamItem />
                <TeamItem />
                <TeamItem />
                <TeamItem />

            </div>
        </div>
    )
}

export default Team