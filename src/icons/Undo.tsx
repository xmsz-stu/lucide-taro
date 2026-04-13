import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 7v6h6"}],["path",{"d":"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]];

const Undo = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Undo.displayName = 'Undo';

export default Undo;
