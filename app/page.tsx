"use client";
import Image from "next/image";
import styles from './page.module.css'; // <--- Import your CSS module here
import Services from '../components/Services'; // Adjust the path as necessary
import Gallery from '../components/Gallery'; // Adjust the path as necessary
import BottomPage from "@/components/BottomPage";
import ContactForm from "@/components/ContactForm";


const images = [
  '/assets/images/IMG_5159.jpg',
  '/assets/images/IMG_7303.jpg',
];


export default function Home() {
  return (
    <div>
      {/* The main container for the background video section */}
      <div className={styles.imageBackgroundContainer}>
        {/* The Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline // Ensures video plays inline on iOS
          className={styles.backgroundVideo}
        >
          {/* Be sure to place your video in the `public` folder */}
          {/* Example path: public/videos/your-video.mp4 */}
          <source src="/assets/TintVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.contentOverlay}>
          <div className={styles.textAlignCen}>
            <div className={styles.bottomBorderDiv}>
              <p className={styles.kevinsTintText}>
                Kevins Tint
              </p>
            </div>
            <div className={styles.marginTop20}>
              <p className={styles.carWindowTintingText}>
                Car Window Tinting
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.imageOverviewContainer}>
      <p className={styles.TitleText}>Full Window Tint Services</p>
      <p className={styles.textBody}>
        Serving the Anoka and wider
        Twin Cities area, our small window tinting business is dedicated to providing high-quality 
        tint solutions for your vehicle.
      </p>
      <p className={styles.textBody}>We specialize in both premium Carbon and advanced Ceramic 
        window films, designed to enhance your driving experience and the aesthetics of your car.</p>
      <img 
        src="/assets/images/IMG_5159.jpg"
        alt="Full Window Tint Services"
        width={200} // Original width, acts as intrinsic size
          height={200} // Original height
      />
    </div>
    <div className={styles.header}>
      <p className={styles.titleText}>Services</p>
    </div>
    <Services
      image="/assets/images/IMG_7303.jpg"
      title="Full Sedan Tint"
      description="Experience the ultimate in car window tinting with our full sedan tint service."
      price={"Carbon Tint: $195,\n Ceramic Tint: $245"}
    />
    <Services
      image="/assets/images/IMG_2890.jpg"
      title="Full Truck Tint"
      description="Transform your truck with our comprehensive window tinting service."
      price={"Carbon Tint: $245,\n Ceramic Tint: $295"}
    />
    <Services
      image="/assets/images/IMG_6809.jpg"
      title="Windshield Tint"
      description="Enhance your driving comfort with our windshield tinting service."
      price="Carbon Tint $95, Ceramic Tint: $145"
    />
    <Services
      image="/assets/images/EyeBrowTint.jpg"
      title="Eyebrow Tint"
      description="Add a stylish touch to your vehicle with our eyebrow tint service."
      price="Carbon Tint: $45, Ceramic Tint: $65"
    />
      <Services
      image="/assets/images/IMG_5396.jpg"
      title="Tint Removal"
      description="Need to remove old or damaged tint? Our tint removal service has you covered."
      price="Full Removal: $60-100, Per Window: $15"
    />
    <div className={styles.galleryHeader}>
      <p className={styles.galleryTitle}>Gallery</p>
    </div>
    <Gallery images={images}/>
    <div className={styles.fullGalleryContainer}>
      <p className={styles.galleryText}>Check out our full gallery </p>
        <button>
          <img src="assets/icons/rightArrowIcon.png" style={{height:20, width:20, marginLeft:30}}/>
        </button>
      </div>
      <div className={styles.contactUsContainer}>
        <p className={styles.contactUsText}>
          Contact us: 
        </p>
        <ContactForm />
      </div>
    </div>
  );
}