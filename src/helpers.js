 export const getGif = async(category) => {
    const apiKey = 'fJCe1AbdhYTechoZ22hB2VDUYJgLjTgF';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=9`);
        const {data}  = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }))
        return gifs
    }
