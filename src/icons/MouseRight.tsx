import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 7.318V10"}],["path",{"d":"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7"}],["circle",{"cx":"17","cy":"4","r":"2"}]];

const MouseRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MouseRight.displayName = 'MouseRight';

export default MouseRight;
