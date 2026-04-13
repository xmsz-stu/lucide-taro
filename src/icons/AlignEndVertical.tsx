import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["rect",{"x":"9","y":"14","rx":"2"}],["path",{"d":"M22 22V2"}]];

const AlignEndVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignEndVertical.displayName = 'AlignEndVertical';

export default AlignEndVertical;
