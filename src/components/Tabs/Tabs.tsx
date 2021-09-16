import React, { ChangeEvent, FunctionComponent, useCallback } from 'react';
import cn from 'classnames';

import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@material-ui/core/Tab';

import styles from './Tabs.module.css';

type Props = {
  tabs: Array<{ label: string; value: string; disabled?: boolean }>;
  selectedTab?: string;
  onChange: (value: string) => void;
  classes?: {
    root?: string;
    tab?: string;
    selected?: string;
    indicator?: string;
  };
};

const Tabs: FunctionComponent<Props> = (props) => {
  const { tabs, selectedTab, onChange, classes } = props;

  const handleTabChange = useCallback(
    (event: ChangeEvent<unknown>, value: string) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <MuiTabs
      classes={{
        root: cn(classes?.root),
        indicator: cn(styles.tabIndicator, classes?.indicator),
      }}
      value={selectedTab}
      onChange={handleTabChange}
    >
      {tabs.map((tab) => (
        <MuiTab
          classes={{
            root: cn(styles.tab, classes?.tab),
            selected: cn(styles.tabSelected, classes?.selected),
            disabled: styles.tabDisabled,
          }}
          key={tab.value}
          label={tab.label}
          value={tab.value}
          disabled={tab.disabled || false}
        />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
