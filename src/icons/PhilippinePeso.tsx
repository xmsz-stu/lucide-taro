import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20 11H4"}],["path",{"d":"M20 7H4"}],["path",{"d":"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]];

const PhilippinePeso = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PhilippinePeso.displayName = 'PhilippinePeso';

export default PhilippinePeso;
