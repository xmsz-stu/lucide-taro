import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}]];

const EqualNot = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

EqualNot.displayName = 'EqualNot';

export default EqualNot;
