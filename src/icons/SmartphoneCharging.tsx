import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"2","rx":"2","ry":"2"}],["path",{"d":"M12.667 8 10 12h4l-2.667 4"}]];

const SmartphoneCharging = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SmartphoneCharging.displayName = 'SmartphoneCharging';

export default SmartphoneCharging;
