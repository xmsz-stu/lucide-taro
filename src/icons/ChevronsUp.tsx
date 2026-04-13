import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 11-5-5-5 5"}],["path",{"d":"m17 18-5-5-5 5"}]];

const ChevronsUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsUp.displayName = 'ChevronsUp';

export default ChevronsUp;
