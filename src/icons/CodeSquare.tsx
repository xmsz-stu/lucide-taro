import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m10 9-3 3 3 3"}],["path",{"d":"m14 15 3-3-3-3"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const CodeSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CodeSquare.displayName = 'CodeSquare';

export default CodeSquare;
