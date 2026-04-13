import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"}],["circle",{"cx":"14","cy":"12","r":"8"}]];

const RectangleCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RectangleCircle.displayName = 'RectangleCircle';

export default RectangleCircle;
