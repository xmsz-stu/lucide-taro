import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 21V3h8"}],["path",{"d":"M6 16h9"}],["path",{"d":"M10 9.5h7"}]];

const SwissFranc = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SwissFranc.displayName = 'SwissFranc';

export default SwissFranc;
