import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 14.5A9 6.5 0 0 1 5.5 19"}],["path",{"d":"M3 9.5A9 6.5 0 0 1 18.5 5"}],["circle",{"cx":"17.5","cy":"14.5","r":"3.5"}],["circle",{"cx":"6.5","cy":"9.5","r":"3.5"}]];

const ZodiacCancer = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZodiacCancer.displayName = 'ZodiacCancer';

export default ZodiacCancer;
