import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["ellipse",{"cx":"12","cy":"11","rx":"3","ry":"2"}],["ellipse",{"cx":"12","cy":"12.5","rx":"10","ry":"8.5"}]];

const Torus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Torus.displayName = 'Torus';

export default Torus;
