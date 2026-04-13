import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 5v14"}],["path",{"d":"m19 12-7 7-7-7"}]];

const ArrowDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
