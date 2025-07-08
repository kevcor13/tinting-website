import Image from "next/image";

export default function Home() {
  return (
    // Main container for the video background and content
    <div
      style={{
        position: 'relative',
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        overflow: 'hidden', // Hide overflow from video
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Semi-transparent black overlay
      }}
    >
      {/* Video element for the background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1, // Send video to the back
          transform: 'translate(-50%, -50%)', // Center the video
          objectFit: 'cover', // Cover the container
          filter: 'brightness(0.8) contrast(1.2)', // Optional: Adjust video appearance
        }}
      >
        {/* Replace with your video paths */}
        <source src="/assets/Opening Video.mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlaying the video */}
      <div
        style={{
          position: 'relative', // Ensure content is above video
          zIndex: 1, // Ensure content is above video
          color: 'white', // Ensure text visibility
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Optional: Text readability
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        {/* Your original content structure */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}> {/* Added flexDirection: 'column' */}
            <Image
              src="/assets/icons/sport-car.png" // Path relative to the `public` directory
              alt="Company Logo" // Important for accessibility and SEO
              width={402} // Required
              height={132} // Required
              priority // Optional
              style={{ color: "white", marginLeft: 40 }}
            />
            <div style={{ textAlign: "center", marginTop: -140 }}>
              <div
                style={{
                  display: "inline-block",
                  borderBottom: "2px solid #FFFFFF",
                }}
              >
                <p
                  style={{
                    fontSize: 86,
                    fontFamily: 'var(--font-hammersmith-one)',
                    textTransform: 'uppercase',
                  }}
                >
                  Kevins Tint
                </p>
              </div>
              <div style={{ marginTop: 20 }}>
                <p
                  style={{
                    fontSize: 29,
                    fontFamily: 'var(--font-hammersmith-one)',
                  }}
                >
                  Car Window Tinting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}