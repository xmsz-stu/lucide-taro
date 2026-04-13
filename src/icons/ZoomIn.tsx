import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"11","cy":"11","r":"8"}],["line",{}],["line",{}],["line",{}]];

const ZoomIn = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZoomIn.displayName = 'ZoomIn';

export default ZoomIn;
