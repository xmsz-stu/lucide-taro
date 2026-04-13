import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19 13v6h-6"}],["path",{"d":"M5 11V5h6"}],["path",{"d":"m5 5 14 14"}]];

const MoveDiagonal2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveDiagonal2.displayName = 'MoveDiagonal2';

export default MoveDiagonal2;
