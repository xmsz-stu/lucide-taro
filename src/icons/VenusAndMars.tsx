import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 20h4"}],["path",{"d":"M12 16v6"}],["path",{"d":"M17 2h4v4"}],["path",{"d":"m21 2-5.46 5.46"}],["circle",{"cx":"12","cy":"11","r":"5"}]];

const VenusAndMars = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

VenusAndMars.displayName = 'VenusAndMars';

export default VenusAndMars;
