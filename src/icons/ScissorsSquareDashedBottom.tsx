import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}],["line",{}],["path",{"d":"M 3 5 A2 2 0 0 1 5 3"}],["path",{"d":"M 19 3 A2 2 0 0 1 21 5"}],["path",{"d":"M 5 21 A2 2 0 0 1 3 19"}],["path",{"d":"M 21 19 A2 2 0 0 1 19 21"}],["circle",{"cx":"8.5","cy":"8.5","r":"1.5"}],["line",{}],["line",{}],["circle",{"cx":"8.5","cy":"15.5","r":"1.5"}],["line",{}]];

const ScissorsSquareDashedBottom = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ScissorsSquareDashedBottom.displayName = 'ScissorsSquareDashedBottom';

export default ScissorsSquareDashedBottom;
