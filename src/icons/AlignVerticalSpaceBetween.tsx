import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"15","rx":"2"}],["rect",{"x":"7","y":"3","rx":"2"}],["path",{"d":"M2 21h20"}],["path",{"d":"M2 3h20"}]];

const AlignVerticalSpaceBetween = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalSpaceBetween.displayName = 'AlignVerticalSpaceBetween';

export default AlignVerticalSpaceBetween;
