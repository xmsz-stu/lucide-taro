import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M8 15h8"}],["path",{"d":"M8 9h2"}],["path",{"d":"M14 9h2"}]];

const Annoyed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Annoyed.displayName = 'Annoyed';

export default Annoyed;
