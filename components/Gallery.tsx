"use client"; // This component needs client-side interactivity

import React, { useState } from 'react';
import styles from '../components/Gallery.module.css'; // We'll create this CSS module

type ImageGalleryProps = {
  images: string[]; // Array of image URLs
  altText?: string; // Optional alt text for accessibility
};

const ImageGallery = ({ images, altText = "Gallery image" }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <div className={styles.galleryContainer}>
      <button
        onClick={goToPrevious}
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        aria-label="Previous image"
      >
        <img src='/assets/icons/leftArrowIcon.png' style={{height:40, width:40}}/>
      </button>

      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`${altText} ${currentIndex + 1}`}
          className={styles.currentImage}
        />
      </div>

      <button
        onClick={goToNext}
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        aria-label="Next image"
      >
        <img src='/assets/icons/rightArrowIcon.png' style={{height:40, width:40}}/>
      </button>
    </div>
  );
};

export default ImageGallery;