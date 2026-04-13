import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}],["path",{"d":"M14 4v16"}],["path",{"d":"M19 4v16"}],["path",{"d":"M22 6 2 18"}]];

const Tally5 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tally5.displayName = 'Tally5';

export default Tally5;
