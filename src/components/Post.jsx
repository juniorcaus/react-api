import React from 'react'

import { Posts } from './Posts'

export function Post(props) {
  return (
    <ul>

        <li>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    </ul>

        
  )
}
