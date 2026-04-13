import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 11 2-2-2-2"}],["path",{"d":"M11 13h4"}],["rect",{"x":"3","y":"3","rx":"2","ry":"2"}]];

const TerminalSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TerminalSquare.displayName = 'TerminalSquare';

export default TerminalSquare;
