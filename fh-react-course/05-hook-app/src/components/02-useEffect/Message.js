import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    // console.log('Message Mounted');
    const onMouseMove = (e) => {
      const coords = 'Cords';
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      // console.log('Message UnMounted');
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])


  return (
    <>
      <h3>User already exits</h3>
    </>
  )
}
