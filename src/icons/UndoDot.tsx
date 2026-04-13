import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 17a9 9 0 0 0-15-6.7L3 13"}],["path",{"d":"M3 7v6h6"}],["circle",{"cx":"12","cy":"17","r":"1"}]];

const UndoDot = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

UndoDot.displayName = 'UndoDot';

export default UndoDot;
