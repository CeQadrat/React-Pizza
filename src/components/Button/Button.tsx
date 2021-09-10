import React, { FunctionComponent, ReactNode } from 'react';

import MuiButton from '@material-ui/core/Button';

import styles from './Button.module.css';

type Props = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

const Button: FunctionComponent<Props> = (props) => {
  const { startIcon, endIcon, children } = props;

  return (
    <MuiButton
      variant="contained"
      disableElevation
      className={styles.button}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
