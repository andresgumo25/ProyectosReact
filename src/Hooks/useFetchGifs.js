
import { useState, useEffect } from 'react';
import { getGif } from '../helpers';


export const useFecthGifs = (category) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    const getImages = async() => {
        const newImages = await getGif ( category);
        setImages(newImages);
        setIsLoading(false)
        console.log(category)
    }
    useEffect(() => {
        getImages();
    }, [])   


  return {
    images,
    isLoading: isLoading
  }
}
