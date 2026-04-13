import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"5","rx":"2"}],["rect",{"x":"15","y":"7","rx":"2"}],["path",{"d":"M3 2v20"}],["path",{"d":"M21 2v20"}]];

const AlignHorizontalSpaceBetween = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalSpaceBetween.displayName = 'AlignHorizontalSpaceBetween';

export default AlignHorizontalSpaceBetween;
