import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"6","y":"14","rx":"2"}],["rect",{"x":"6","y":"4","rx":"2"}],["path",{"d":"M2 2v20"}]];

const AlignStartVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignStartVertical.displayName = 'AlignStartVertical';

export default AlignStartVertical;
