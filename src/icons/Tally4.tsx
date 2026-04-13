import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}],["path",{"d":"M14 4v16"}],["path",{"d":"M19 4v16"}]];

const Tally4 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tally4.displayName = 'Tally4';

export default Tally4;
