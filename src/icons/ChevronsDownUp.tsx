import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 20 5-5 5 5"}],["path",{"d":"m7 4 5 5 5-5"}]];

const ChevronsDownUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsDownUp.displayName = 'ChevronsDownUp';

export default ChevronsDownUp;
