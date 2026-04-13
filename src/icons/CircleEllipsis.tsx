import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M17 12h.01"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M7 12h.01"}]];

const CircleEllipsis = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CircleEllipsis.displayName = 'CircleEllipsis';

export default CircleEllipsis;
