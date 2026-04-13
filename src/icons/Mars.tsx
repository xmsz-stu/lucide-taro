import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 3h5v5"}],["path",{"d":"m21 3-6.75 6.75"}],["circle",{"cx":"10","cy":"14","r":"6"}]];

const Mars = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Mars.displayName = 'Mars';

export default Mars;
