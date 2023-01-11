import { useState, useEffect } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
export const GifExpertApp = () => {

  
    const [categories, setCategories] = useState([]);

    const onAddcategory = (newCategorie) =>{
        if(categories.includes(newCategorie)) return;
        setCategories([newCategorie,...categories]);
    }
    return (
        <>
        { /*titulo*/}
        <h1>GifExpertApp</h1>

        {/*imput de busqueda*/}
        <AddCategory 
            onNewCategory = {(value) => onAddcategory(value)}
        />
    
        {
            categories.map( (category) =>
                <GifGrid 
                    key={category}
                    category={category}
                />)
        }




        </>
    );
}