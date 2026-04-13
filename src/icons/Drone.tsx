import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 10 7 7"}],["path",{"d":"m10 14-3 3"}],["path",{"d":"m14 10 3-3"}],["path",{"d":"m14 14 3 3"}],["path",{"d":"M14.205 4.139a4 4 0 1 1 5.439 5.863"}],["path",{"d":"M19.637 14a4 4 0 1 1-5.432 5.868"}],["path",{"d":"M4.367 10a4 4 0 1 1 5.438-5.862"}],["path",{"d":"M9.795 19.862a4 4 0 1 1-5.429-5.873"}],["rect",{"x":"10","y":"8","rx":"1"}]];

const Drone = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Drone.displayName = 'Drone';

export default Drone;
