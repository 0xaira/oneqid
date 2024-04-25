import React from 'react';
import finger from '../assests/finger.png';
import styles from './Hero.module.css'; // Import CSS file for styling

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.content}>
        <div className='flex flex-col items-center justify-center mx-auto '>
        <h1 className='text-7xl text-white font-bold mt-40 ml-20 text-center'>every person deserves to know <br /> and be known by their <br /> true identity</h1>
        <button className="flex items-center text-black rounded-full bg-white font-bold py-3 text-xl px-6 mt-4">
          Download qid
        </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;