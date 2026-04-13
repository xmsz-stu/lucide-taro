import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 9v7"}],["path",{"d":"M14 6v10"}],["circle",{"cx":"17.5","cy":"12.5","r":"3.5"}],["circle",{"cx":"6.5","cy":"12.5","r":"3.5"}]];

const CaseLower = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CaseLower.displayName = 'CaseLower';

export default CaseLower;
