import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 6v12"}],["path",{"d":"M17.196 9 6.804 15"}],["path",{"d":"m6.804 9 10.392 6"}]];

const Asterisk = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Asterisk.displayName = 'Asterisk';

export default Asterisk;
