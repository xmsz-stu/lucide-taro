import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 6 5 5 5-5"}],["path",{"d":"m7 13 5 5 5-5"}]];

const ChevronsDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsDown.displayName = 'ChevronsDown';

export default ChevronsDown;
