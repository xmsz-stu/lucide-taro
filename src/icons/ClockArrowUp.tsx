import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 6v6l1.56.78"}],["path",{"d":"M13.227 21.925a10 10 0 1 1 8.767-9.588"}],["path",{"d":"m14 18 4-4 4 4"}],["path",{"d":"M18 22v-8"}]];

const ClockArrowUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ClockArrowUp.displayName = 'ClockArrowUp';

export default ClockArrowUp;
