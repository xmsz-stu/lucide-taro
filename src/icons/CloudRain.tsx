import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{"d":"M16 14v6"}],["path",{"d":"M8 14v6"}],["path",{"d":"M12 16v6"}]];

const CloudRain = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CloudRain.displayName = 'CloudRain';

export default CloudRain;
