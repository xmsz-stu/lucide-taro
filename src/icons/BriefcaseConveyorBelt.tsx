import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 20v2"}],["path",{"d":"M14 20v2"}],["path",{"d":"M18 20v2"}],["path",{"d":"M21 20H3"}],["path",{"d":"M6 20v2"}],["path",{"d":"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"}],["rect",{"x":"4","y":"6","rx":"2"}]];

const BriefcaseConveyorBelt = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BriefcaseConveyorBelt.displayName = 'BriefcaseConveyorBelt';

export default BriefcaseConveyorBelt;
