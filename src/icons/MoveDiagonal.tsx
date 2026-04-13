import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 19H5v-6"}],["path",{"d":"M13 5h6v6"}],["path",{"d":"M19 5 5 19"}]];

const MoveDiagonal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveDiagonal.displayName = 'MoveDiagonal';

export default MoveDiagonal;
