import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 2v2"}],["path",{"d":"M17.915 22a6 6 0 0 0-12 0"}],["path",{"d":"M8 2v2"}],["circle",{"cx":"12","cy":"12","r":"4"}],["rect",{"x":"3","y":"4","rx":"2"}]];

const Contact2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Contact2.displayName = 'Contact2';

export default Contact2;
