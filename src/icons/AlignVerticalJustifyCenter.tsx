import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"16","rx":"2"}],["rect",{"x":"7","y":"2","rx":"2"}],["path",{"d":"M2 12h20"}]];

const AlignVerticalJustifyCenter = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalJustifyCenter.displayName = 'AlignVerticalJustifyCenter';

export default AlignVerticalJustifyCenter;
