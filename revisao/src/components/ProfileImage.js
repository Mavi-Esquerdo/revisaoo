import React from 'react'
import '../profileImagem.css'

const ProfileImage = ({titulo, imagem, alt}) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
        </div>
    )
}

export default ProfileImage