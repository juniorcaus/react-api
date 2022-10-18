import React from 'react'

// import  Posts  from './Posts'

export default function Post ({ title, description }) {
  return (
    <ul>

        <li>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    </ul>

        
  )
}
