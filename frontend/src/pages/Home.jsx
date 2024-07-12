import React, { useContext } from 'react';
import Landing from '../components/Landing';
import { v4 as uuidv4 } from 'uuid';
import ReactPaginate from 'react-paginate';
import { UserContext } from '../context/UserContext';

// URL of the background image
const backgroundImageUrl = 'https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D';

export default function Home() {
  const { currentUser, register_user } = useContext(UserContext);

  register_user(); // Assuming this function performs some context-related logic

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Ensures the background covers the entire viewport
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', // Center align text content
        padding: '2rem', // Padding around text content
      }}
    >
      <Landing />
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
      Where Imagination Meets Perfection – Events Tailored Just for You.
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
      Crafting Unforgettable Moments: Where Every Detail Counts.
      </p>
      <div>
        {currentUser}
      </div>
    </div>
  );
}
