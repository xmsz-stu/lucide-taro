import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 4h.01"}],["path",{"d":"M20 12h.01"}],["path",{"d":"M12 20h.01"}],["path",{"d":"M4 12h.01"}],["path",{"d":"M17.657 6.343h.01"}],["path",{"d":"M17.657 17.657h.01"}],["path",{"d":"M6.343 17.657h.01"}],["path",{"d":"M6.343 6.343h.01"}]];

const SunDim = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SunDim.displayName = 'SunDim';

export default SunDim;
