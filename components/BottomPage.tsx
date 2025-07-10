'use client'
import React from 'react'
import { useRouter } from 'next/navigation'; // <-- Correct import for App Router

import styles from './BottomPage.module.css'; // Import your CSS module
import { withCoalescedInvoke } from 'next/dist/lib/coalesced-function';
import ContactForm from './ContactForm';

function BottomPage() {
    const router = useRouter(); // Initialize the router
    const  handleClick =() => {
        router.push('https://www.instagram.com/kevins_tint/'); // Navigate to Instagram page
    }

  return (
    <div>
        <div className={styles.container}>
            <div className={styles.logoContainer}>
            <img src={"/assets/icons/sport-car.png"}/>
            <p className={styles.logoText}>
                Kevins Tint
            </p>
            <p>
                Car Window Tinting
            </p>
            <p className={styles.constactUs}>
                Contact us:
            </p>
            <div className={styles.socialMedia}>
                <button
                onClick={handleClick}
                >
                <img src={"/assets/icons/instagram-logo.png"} style={{width:20, height:20}}/>
                </button>
                <a className={styles.socialMediaName}>
                    Instagram
                </a>
            </div>
            
            <p className={styles.copyright}>
                © 2023 Kevins Tint. All rights reserved.
            </p>
        </div>
        </div>
    </div>
  )
}

export default BottomPage