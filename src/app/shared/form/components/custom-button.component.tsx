import React from 'react';

import '../styles/custom-button.styles.scss';

interface PropsType {
  name: string;
  onClick: () => void;
  isTypeSubmit: boolean;
}

const CustomButtonComponent = ({ name, onClick, isTypeSubmit }: PropsType) => (
  <button
    className="custom-button"
    onClick={onClick}
    type={isTypeSubmit ? 'submit' : 'button'}
  >
    {name}
  </button>
)

export default CustomButtonComponent;