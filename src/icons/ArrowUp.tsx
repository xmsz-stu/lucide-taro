import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m5 12 7-7 7 7"}],["path",{"d":"M12 19V5"}]];

const ArrowUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;
