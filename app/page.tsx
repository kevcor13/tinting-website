import Image from "next/image";
import styles from './page.module.css'; // <--- Import your CSS module here

export default function Home() {
  return (
    <div>
      <div className={styles.imageBackgroundContainer}>
      <div className={styles.contentOverlay}>
        {/* Your original content structure */}
        <div className={styles.centerFlexContainer}>
          <div className={styles.contentFlexColumn}>
            <img
              src="/assets/icons/sport-car.png" // Path relative to the `public` directory
              alt="Company Logo" // Important for accessibility and SEO
              className={styles.iconsContainer} // Keep specific inline styles if they are truly unique and not reusable
            />
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
          //style={{ width: 'auto', height: 'auto' }}
      />
    </div>
    </div>
  );
}