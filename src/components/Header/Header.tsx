import React from 'react';
import styles from './styles.module.scss';
import { useData } from '@/context/DataContext';
import DateRange from './DateRange';
import Meses from './Meses';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo';
    } else if (location.pathname === '/vendas') {
      setTitle('Vendas');
      document.title = 'Fintech | Vendas';
    }
  }, [location]);
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
