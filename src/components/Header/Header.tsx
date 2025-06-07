import React from 'react';
import styles from './styles.module.scss';
import { useData } from '@/context/DataContext';
import DateRange from './DateRange';

export default function Header() {
  return (
    <header className={styles.header}>
      <DateRange />
    </header>
  );
}
