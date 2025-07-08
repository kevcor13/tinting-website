// components/Header.jsx
'use client'; // This directive makes this component a Client Component

import Link from 'next/link'; // Import Link for client-side navigation
import Image from 'next/image'; // <--- **Crucial: Import the Image component**

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '15px', // Reduced gap for tighter layout as seen in screenshot
      padding: '10px 20px',
 // Assuming a dark header background based on white text
      color: 'white', // Default text color for the header
      borderBottom: '1px solid #333',
      flexWrap: 'wrap', // Allow items to wrap on smaller screens if they don't fit in one line
      justifyContent: 'space-between' // Distribute items with space in between
    }}>

      {/* Your site title/logo as a link to home */}
      {/* Changed font to 'sans-serif' as 'ha' is likely a typo or custom font not defined here */}
      <Link href="/" style={{ fontFamily: 'sans-serif', fontSize: 24, textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
        Home
      </Link>
      {/* **Fix:** Correct path, add width, height, and alt */}
      <Image
        src="/assets/icons/home.png" // Path relative to the `public` directory
        alt="Company Logo"         // Important for accessibility and SEO
        width={50}                 // **Required:** Set an appropriate width for your logo
        height={50}                // **Required:** Set an appropriate height for your logo
        priority                   // Optional: Use for logos/images above the fold for faster loading
        style={{ borderRadius: '5px', color:'white'}} // Example style if you want rounded corners
      />

      {/* Navigation Links */}
      <nav style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
        <Link href="/about" style={{ textDecoration: 'none', color: 'white' }}>
          About Us
        </Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
          Contact
        </Link>
      </nav>

      {/* Add a placeholder for a "Get a Quote" button if desired, similar to previous examples */}
      {/*
      <button
        onClick={() => alert('Get a Quote clicked!')}
        style={{
          padding: '8px 15px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Get a Quote
      </button>
      */}
    </header>
  );
}