// pages/index.tsx
'use client';

// pages/index.tsx
import React from 'react';
import SearchBox from '../components/SearchBox';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <SearchBox  />
    </div>
  );
};

export default HomePage;
