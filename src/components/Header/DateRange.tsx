import React from 'react';
import DateInput from './DateInput';
import { useData } from '@/context/DataContext';

export default function DateRange() {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput label="Inicio" value={inicio} onChange={({ target }) => setInicio(target.value)} />
      <DateInput label="Final" value={final} onChange={({ target }) => setFinal(target.value)} />
    </form>
  );
}
