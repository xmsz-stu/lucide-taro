import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m9 7-5 5 5 5"}],["path",{"d":"m15 7 5 5-5 5"}]];

const ChevronsLeftRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsLeftRight.displayName = 'ChevronsLeftRight';

export default ChevronsLeftRight;
