import React from 'react';
import MesBtn from './MesBtn';

export default function Meses() {
  return (
    <div className="flex">
      <MesBtn n={-2} />
      <MesBtn n={-1} />
      <MesBtn n={0} />
    </div>
  );
}
