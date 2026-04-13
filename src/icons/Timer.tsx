import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["circle",{"cx":"12","cy":"14","r":"8"}]];

const Timer = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Timer.displayName = 'Timer';

export default Timer;
