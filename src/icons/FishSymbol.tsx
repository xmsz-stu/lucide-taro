import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 16s9-15 20-4C11 23 2 8 2 8"}]];

const FishSymbol = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

FishSymbol.displayName = 'FishSymbol';

export default FishSymbol;
