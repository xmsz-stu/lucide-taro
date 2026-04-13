import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{"d":"M17 7A5 5 0 0 0 7 7"}],["path",{"d":"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]];

const IceCreamCone = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

IceCreamCone.displayName = 'IceCreamCone';

export default IceCreamCone;
