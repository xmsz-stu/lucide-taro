import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{"d":"M2 12a9 9 0 0 1 8 8"}],["path",{"d":"M2 16a5 5 0 0 1 4 4"}],["line",{}]];

const Cast = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Cast.displayName = 'Cast';

export default Cast;
