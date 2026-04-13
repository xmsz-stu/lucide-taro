import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 4v16"}],["path",{"d":"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{"d":"M2 17h20"}],["path",{"d":"M6 8v9"}]];

const Bed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Bed.displayName = 'Bed';

export default Bed;
