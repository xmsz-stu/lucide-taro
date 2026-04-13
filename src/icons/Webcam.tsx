import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"10","r":"8"}],["circle",{"cx":"12","cy":"10","r":"3"}],["path",{"d":"M7 22h10"}],["path",{"d":"M12 22v-4"}]];

const Webcam = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Webcam.displayName = 'Webcam';

export default Webcam;
