import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}]];

const Hash = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Hash.displayName = 'Hash';

export default Hash;
