import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"15","r":"6"}],["path",{"d":"M18 3A6 6 0 0 1 6 3"}]];

const ZodiacTaurus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZodiacTaurus.displayName = 'ZodiacTaurus';

export default ZodiacTaurus;
