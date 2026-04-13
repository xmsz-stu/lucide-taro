import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 7v4"}],["path",{"d":"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const SquarePower = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SquarePower.displayName = 'SquarePower';

export default SquarePower;
