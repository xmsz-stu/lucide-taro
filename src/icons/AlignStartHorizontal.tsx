import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"6","rx":"2"}],["rect",{"x":"14","y":"6","rx":"2"}],["path",{"d":"M22 2H2"}]];

const AlignStartHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignStartHorizontal.displayName = 'AlignStartHorizontal';

export default AlignStartHorizontal;
