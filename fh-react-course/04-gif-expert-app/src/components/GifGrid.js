import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=10&api_key=uU67eV62f2vHWHXD3PImL30hOsDOGUe7'
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })
    
    // setImages([...images, gifs]);
    setImages(gifs);
  }

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        <ol>
          {images.map((img) => (
              <GifGridItem 
                key ={img.id}
                {...img}
              />
            )
          )}
        </ol>
      </div>
    </>
  )
}
