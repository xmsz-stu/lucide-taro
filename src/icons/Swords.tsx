import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["polyline",{"points":"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{}],["line",{}],["line",{}],["polyline",{"points":"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{}],["line",{}],["line",{}]];

const Swords = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Swords.displayName = 'Swords';

export default Swords;
