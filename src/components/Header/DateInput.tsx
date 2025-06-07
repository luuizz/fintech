import React from 'react';

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};

export default function DateInput({ label, ...props }: IDateInput) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" id={label} name={label} {...props} />
    </div>
  );
}
