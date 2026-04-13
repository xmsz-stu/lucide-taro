import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"2","rx":"2"}],["path",{"d":"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{"x":"8","y":"16","rx":"1"}]];

const PaintRoller = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PaintRoller.displayName = 'PaintRoller';

export default PaintRoller;
