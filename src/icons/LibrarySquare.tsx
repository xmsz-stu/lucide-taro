import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 7v10"}],["path",{"d":"M11 7v10"}],["path",{"d":"m15 7 2 10"}]];

const LibrarySquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LibrarySquare.displayName = 'LibrarySquare';

export default LibrarySquare;
