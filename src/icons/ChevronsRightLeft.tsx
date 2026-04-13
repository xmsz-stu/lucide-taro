import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m20 17-5-5 5-5"}],["path",{"d":"m4 17 5-5-5-5"}]];

const ChevronsRightLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsRightLeft.displayName = 'ChevronsRightLeft';

export default ChevronsRightLeft;
