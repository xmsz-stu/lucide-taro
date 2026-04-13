import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"2","rx":"2"}],["rect",{"x":"14","y":"2","rx":"2"}]];

const StretchVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

StretchVertical.displayName = 'StretchVertical';

export default StretchVertical;
