import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    {'  |  '}
                    <Link to='/about'>About</Link>
                    {'  |  '}
                    <Link to='/contact'>Contact</Link>
                    {'  |  '}
                    <Link to='/users/register'>Register</Link>
                </li>
            </ul>

        </div>
    )
}
