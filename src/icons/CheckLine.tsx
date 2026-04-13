import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20 4L9 15"}],["path",{"d":"M21 19L3 19"}],["path",{"d":"M9 15L4 10"}]];

const CheckLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CheckLine.displayName = 'CheckLine';

export default CheckLine;
