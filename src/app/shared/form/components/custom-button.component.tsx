import React from 'react';
import { useRouter } from 'next/router';

import '../styles/custom-button.styles.scss';

interface PropsType {
  name: string;
  onClick?: (param: any) => void;
  redirectUrl?: string;
  isTypeSubmit?: boolean;
  customClass?: string;
}

const CustomButtonComponent = ({ name, onClick, isTypeSubmit, redirectUrl, customClass }: PropsType) => {
  const router = useRouter();
  const redirect = () => {
    router.push(redirectUrl)
  }

  return (
    <button
      className={`custom-button ${customClass}`}
      onClick={redirectUrl ? redirect : onClick}
      type={isTypeSubmit ? 'submit' : 'button'}
    >
      {name}
    </button>
  )
}

export default CustomButtonComponent;