import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 12h8"}],["path",{"d":"M4 18V6"}],["path",{"d":"M12 18V6"}],["path",{"d":"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]];

const Heading2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Heading2.displayName = 'Heading2';

export default Heading2;
