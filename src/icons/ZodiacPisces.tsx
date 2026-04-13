import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19 21a15 15 0 0 1 0-18"}],["path",{"d":"M20 12H4"}],["path",{"d":"M5 3a15 15 0 0 1 0 18"}]];

const ZodiacPisces = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZodiacPisces.displayName = 'ZodiacPisces';

export default ZodiacPisces;
