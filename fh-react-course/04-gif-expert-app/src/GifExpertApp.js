import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () =>{
  //   // setCategories([...categories, 'HunterXHunter']);
  //   setCategories(cats => [...cats, 'HunterXHunter']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      {/* <button onClick={ handleAdd }>Add new</button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>category</li>
        })}
      </ol>
    </>
  )
}
