import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"16","rx":"2"}],["rect",{"x":"7","y":"6","rx":"2"}],["path",{"d":"M2 2h20"}]];

const AlignVerticalJustifyStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalJustifyStart.displayName = 'AlignVerticalJustifyStart';

export default AlignVerticalJustifyStart;
