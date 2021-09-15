import React, { FunctionComponent, MouseEventHandler } from 'react';

import MuiIconButton from '@material-ui/core/IconButton';

import styles from './IconButton.module.css';

type Props = {
  onClick?: MouseEventHandler;
  color?: 'primary' | 'default';
};

const IconButton: FunctionComponent<Props> = (props) => {
  const { children, onClick, color = 'primary' } = props;
  return (
    <MuiIconButton
      className={styles.iconButton}
      classes={{
        colorPrimary: styles.iconButtonPrimary,
      }}
      color={color}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
