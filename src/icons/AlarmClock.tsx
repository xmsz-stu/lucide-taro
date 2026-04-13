import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"13","r":"8"}],["path",{"d":"M12 9v4l2 2"}],["path",{"d":"M5 3 2 6"}],["path",{"d":"m22 6-3-3"}],["path",{"d":"M6.38 18.7 4 21"}],["path",{"d":"M17.64 18.67 20 21"}]];

const AlarmClock = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlarmClock.displayName = 'AlarmClock';

export default AlarmClock;
