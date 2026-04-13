import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m5.2 6.2 1.4 1.4"}],["path",{"d":"M2 13h2"}],["path",{"d":"M20 13h2"}],["path",{"d":"m17.4 7.6 1.4-1.4"}],["path",{"d":"M22 17H2"}],["path",{"d":"M22 21H2"}],["path",{"d":"M16 13a4 4 0 0 0-8 0"}],["path",{"d":"M12 5V2.5"}]];

const Haze = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Haze.displayName = 'Haze';

export default Haze;
