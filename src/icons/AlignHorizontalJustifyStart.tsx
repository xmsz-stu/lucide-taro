import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"6","y":"5","rx":"2"}],["rect",{"x":"16","y":"7","rx":"2"}],["path",{"d":"M2 2v20"}]];

const AlignHorizontalJustifyStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalJustifyStart.displayName = 'AlignHorizontalJustifyStart';

export default AlignHorizontalJustifyStart;
