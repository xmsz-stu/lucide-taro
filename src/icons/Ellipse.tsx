import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["ellipse",{"cx":"12","cy":"12","rx":"10","ry":"6"}]];

const Ellipse = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Ellipse.displayName = 'Ellipse';

export default Ellipse;
