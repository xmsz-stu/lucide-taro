import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19.5 7a24 24 0 0 1 0 10"}],["path",{"d":"M4.5 7a24 24 0 0 0 0 10"}],["path",{"d":"M7 19.5a24 24 0 0 0 10 0"}],["path",{"d":"M7 4.5a24 24 0 0 1 10 0"}],["rect",{"x":"17","y":"17","rx":"1"}],["rect",{"x":"17","y":"2","rx":"1"}],["rect",{"x":"2","y":"17","rx":"1"}],["rect",{"x":"2","y":"2","rx":"1"}]];

const VectorSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

VectorSquare.displayName = 'VectorSquare';

export default VectorSquare;
