import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"5","r":"1"}],["path",{"d":"m9 20 3-6 3 6"}],["path",{"d":"m6 8 6 2 6-2"}],["path",{"d":"M12 10v4"}]];

const PersonStanding = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PersonStanding.displayName = 'PersonStanding';

export default PersonStanding;
