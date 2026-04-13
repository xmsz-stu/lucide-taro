import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M13 4v16"}],["path",{"d":"M17 4v16"}],["path",{"d":"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]];

const Pilcrow = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Pilcrow.displayName = 'Pilcrow';

export default Pilcrow;
