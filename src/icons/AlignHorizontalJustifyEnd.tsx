import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"5","rx":"2"}],["rect",{"x":"12","y":"7","rx":"2"}],["path",{"d":"M22 2v20"}]];

const AlignHorizontalJustifyEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalJustifyEnd.displayName = 'AlignHorizontalJustifyEnd';

export default AlignHorizontalJustifyEnd;
