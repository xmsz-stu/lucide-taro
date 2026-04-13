import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{}],["line",{}]];

const Laugh = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Laugh.displayName = 'Laugh';

export default Laugh;
