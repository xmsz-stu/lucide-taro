import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 5h8"}],["path",{"d":"M3 12h8"}],["path",{"d":"M3 19h8"}],["path",{"d":"m15 8 3-3 3 3"}],["path",{"d":"m15 16 3 3 3-3"}]];

const ListChevronsUpDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListChevronsUpDown.displayName = 'ListChevronsUpDown';

export default ListChevronsUpDown;
