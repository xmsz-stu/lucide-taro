import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"2","rx":"2"}],["rect",{"x":"2","y":"14","rx":"2"}],["path",{"d":"M6 18h2"}],["path",{"d":"M12 18h6"}]];

const Computer = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Computer.displayName = 'Computer';

export default Computer;
