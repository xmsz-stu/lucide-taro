import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 6.6 8.6 8"}],["path",{"d":"M12 18v4"}],["path",{"d":"M15 7.5 9.5 13"}],["path",{"d":"M7 22h10"}],["circle",{"cx":"12","cy":"10","r":"8"}]];

const MirrorRound = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MirrorRound.displayName = 'MirrorRound';

export default MirrorRound;
