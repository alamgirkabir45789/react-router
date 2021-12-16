import React from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <div>


            <p>This is a great course. You're gonna love it!</p>

            <Link to="/courses">See all courses</Link>
        </div>
    )
}

export default Course
