import * as React from 'react';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  url?: string;
}

export const Button = ({ children, ...props }: Button) => {
  return <button {...props}>{children}</button>;
};
