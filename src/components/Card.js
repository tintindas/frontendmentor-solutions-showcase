import React from 'react'
import './Card.css'

const Card = ( {item}) => {

    const customURL = item.repo.substring(19);
    const imgLink = `https://raw.githubusercontent.com/${customURL}/master/design/desktop-preview.jpg`;
    
    return (
        <div className='card'>
            <img src= {imgLink} alt='showcase'/>
            <h1>{item.name}</h1>
            <a href={item.repo}><i class="fa fa-github" aria-hidden="true"></i></a>
            <a href={item.demo}><i class="fa fa-laptop" aria-hidden="true"></i></a>
        </div>
        
    )
}

export default Card;



