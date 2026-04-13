import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 2v14"}],["path",{"d":"m19 9-7 7-7-7"}],["circle",{"cx":"12","cy":"21","r":"1"}]];

const ArrowDownToDot = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownToDot.displayName = 'ArrowDownToDot';

export default ArrowDownToDot;
