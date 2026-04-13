import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"18.5","cy":"17.5","r":"3.5"}],["circle",{"cx":"5.5","cy":"17.5","r":"3.5"}],["circle",{"cx":"15","cy":"5","r":"1"}],["path",{"d":"M12 17.5V14l-3-3 4-3 2 3h2"}]];

const Bike = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Bike.displayName = 'Bike';

export default Bike;
