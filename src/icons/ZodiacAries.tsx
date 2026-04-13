import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 7.5a4.5 4.5 0 1 1 5 4.5"}],["path",{"d":"M7 12a4.5 4.5 0 1 1 5-4.5V21"}]];

const ZodiacAries = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZodiacAries.displayName = 'ZodiacAries';

export default ZodiacAries;
