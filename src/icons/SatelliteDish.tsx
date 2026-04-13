import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{"d":"m9 15 3-3"}],["path",{"d":"M17 13a6 6 0 0 0-6-6"}],["path",{"d":"M21 13A10 10 0 0 0 11 3"}]];

const SatelliteDish = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SatelliteDish.displayName = 'SatelliteDish';

export default SatelliteDish;
