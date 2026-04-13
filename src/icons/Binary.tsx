import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"14","y":"14","rx":"2"}],["rect",{"x":"6","y":"4","rx":"2"}],["path",{"d":"M6 20h4"}],["path",{"d":"M14 10h4"}],["path",{"d":"M6 14h2v6"}],["path",{"d":"M14 4h2v6"}]];

const Binary = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Binary.displayName = 'Binary';

export default Binary;
