import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M 3 12 L 15 12"}],["circle",{"cx":"18","cy":"12","r":"3"}]];

const LineDotRightHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LineDotRightHorizontal.displayName = 'LineDotRightHorizontal';

export default LineDotRightHorizontal;
