import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}],["path",{"d":"M14 4v16"}]];

const Tally3 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tally3.displayName = 'Tally3';

export default Tally3;
