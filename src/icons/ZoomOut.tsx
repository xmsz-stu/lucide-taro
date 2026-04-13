import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"11","cy":"11","r":"8"}],["line",{}],["line",{}]];

const ZoomOut = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZoomOut.displayName = 'ZoomOut';

export default ZoomOut;
