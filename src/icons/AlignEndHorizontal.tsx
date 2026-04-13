import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"2","rx":"2"}],["rect",{"x":"14","y":"9","rx":"2"}],["path",{"d":"M22 22H2"}]];

const AlignEndHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignEndHorizontal.displayName = 'AlignEndHorizontal';

export default AlignEndHorizontal;
