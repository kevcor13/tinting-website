"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // <-- Correct import for App Router
import styles from './Services.module.css'; // Adjust the path as necessary

type ServicesProps = {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Services = ({ image, title, description, price }: ServicesProps) => {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    console.log("Button clicked");
    // Example: Navigate to a details page for this service
    router.push('https://www.canva.com/design/DAGsf03OYXY/WU6kQKQHhE6dEfiFf2IWdg/edit');
  }

  return (
    <div className={styles.header}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <p className={styles.serviceTitle}>{title}</p>
        <div>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{price}</p>
        </div>
        <button onClick={handleClick} className={styles.button}>Book Appointment</button>
      </div>
    </div>
  )
}
export default Services;