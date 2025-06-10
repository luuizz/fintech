import React from 'react';
import styles from './styles.module.scss';
import { useData } from '@/context/DataContext';
import DateRange from './DateRange';
import Meses from './Meses';

export default function Header() {
  const [title, setTitle] = React.useState('Resumo');
  return (
    <header className={`${styles.header} mb`}>
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
}
