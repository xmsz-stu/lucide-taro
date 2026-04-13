import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 7.318V10"}],["path",{"d":"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7"}],["circle",{"cx":"7","cy":"4","r":"2"}]];

const MouseLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MouseLeft.displayName = 'MouseLeft';

export default MouseLeft;
