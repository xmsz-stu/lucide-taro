import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m15 9-6 6"}],["path",{"d":"M9 9h.01"}],["path",{"d":"M15 15h.01"}]];

const CirclePercent = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CirclePercent.displayName = 'CirclePercent';

export default CirclePercent;
