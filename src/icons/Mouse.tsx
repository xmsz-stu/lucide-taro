import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"2","rx":"7"}],["path",{"d":"M12 6v4"}]];

const Mouse = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Mouse.displayName = 'Mouse';

export default Mouse;
