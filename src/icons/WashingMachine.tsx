import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 6h3"}],["path",{"d":"M17 6h.01"}],["rect",{"x":"3","y":"2","rx":"2"}],["circle",{"cx":"12","cy":"13","r":"5"}],["path",{"d":"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]];

const WashingMachine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

WashingMachine.displayName = 'WashingMachine';

export default WashingMachine;
