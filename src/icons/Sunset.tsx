import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 10V2"}],["path",{"d":"m4.93 10.93 1.41 1.41"}],["path",{"d":"M2 18h2"}],["path",{"d":"M20 18h2"}],["path",{"d":"m19.07 10.93-1.41 1.41"}],["path",{"d":"M22 22H2"}],["path",{"d":"m16 6-4 4-4-4"}],["path",{"d":"M16 18a4 4 0 0 0-8 0"}]];

const Sunset = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Sunset.displayName = 'Sunset';

export default Sunset;
