import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 4v16"}],["path",{"d":"M9 4v16"}]];

const Tally2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tally2.displayName = 'Tally2';

export default Tally2;
