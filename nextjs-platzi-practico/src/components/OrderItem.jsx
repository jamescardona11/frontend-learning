import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import styles from '@styles/OrderItem.module.scss'
import close from '@icons/icon_close.png'
import Image from 'next/image'

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext)

  const handleRemove = (product) => {
    removeFromCart(product)
  }

  if (!product?.images[0]) return <></>

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={120} height={120} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image
        className={(styles.pointer, styles['more-clickable-area'])}
        src={close}
        alt="close"
        width={15} height={15}
        onClick={() => handleRemove(product)}
      />
    </div>
  )
}

export default OrderItem
