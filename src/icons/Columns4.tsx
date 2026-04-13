import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7.5 3v18"}],["path",{"d":"M12 3v18"}],["path",{"d":"M16.5 3v18"}]];

const Columns4 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Columns4.displayName = 'Columns4';

export default Columns4;
