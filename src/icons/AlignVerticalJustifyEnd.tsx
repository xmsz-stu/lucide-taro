import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"12","rx":"2"}],["rect",{"x":"7","y":"2","rx":"2"}],["path",{"d":"M2 22h20"}]];

const AlignVerticalJustifyEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalJustifyEnd.displayName = 'AlignVerticalJustifyEnd';

export default AlignVerticalJustifyEnd;
