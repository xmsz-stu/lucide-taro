import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 12 7 2"}],["path",{"d":"m7 12 5-10"}],["path",{"d":"m12 12 5-10"}],["path",{"d":"m17 12 5-10"}],["path",{"d":"M4.5 7h15"}],["path",{"d":"M12 16v6"}]];

const Antenna = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Antenna.displayName = 'Antenna';

export default Antenna;
