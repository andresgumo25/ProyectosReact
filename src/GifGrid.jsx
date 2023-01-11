import React from 'react';
import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFecthGifs } from './Hooks/useFetchGifs'


export const GifGrid = ({category}) => {

    const { images, isLoading } = useFecthGifs ( category)

    
    return(
        <>
            <h3> {category} </h3>
            {
                isLoading ? ( <h2 >Cargando...</h2>):null
            }

           
            <div className='card-grid'>
                {
                  images.map( (image) =>(
                    <GifItem key={image.id}
                        {...image}/>
                  ) )
                  }

            </div>
        
        </>
    )
}