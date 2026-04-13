import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 8h4"}],["path",{"d":"M12 21v-9"}],["path",{"d":"M12 8V3"}],["path",{"d":"M17 16h4"}],["path",{"d":"M19 12V3"}],["path",{"d":"M19 21v-5"}],["path",{"d":"M3 14h4"}],["path",{"d":"M5 10V3"}],["path",{"d":"M5 21v-7"}]];

const Sliders = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Sliders.displayName = 'Sliders';

export default Sliders;
