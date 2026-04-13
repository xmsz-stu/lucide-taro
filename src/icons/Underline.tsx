import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{}]];

const Underline = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Underline.displayName = 'Underline';

export default Underline;
