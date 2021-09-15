import React, { FunctionComponent, ReactNode } from 'react';

import MuiButton from '@material-ui/core/Button';

import styles from './Button.module.css';

type Props = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'default';
};

const Button: FunctionComponent<Props> = (props) => {
  const {
    startIcon,
    endIcon,
    children,
    variant = 'outlined',
    color = 'primary',
  } = props;

  return (
    <MuiButton
      classes={{
        root: styles.button,
        outlined: styles.buttonOutlined,
        outlinedPrimary: styles.buttonOutlinedPrimary,
        containedPrimary: styles.buttonContainedPrimary,
        text: styles.buttonText,
        contained: styles.buttonContained,
      }}
      variant={variant}
      color={color}
      disableElevation
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
