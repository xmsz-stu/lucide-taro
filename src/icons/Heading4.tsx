import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 18V6"}],["path",{"d":"M17 10v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M21 10v8"}],["path",{"d":"M4 12h8"}],["path",{"d":"M4 18V6"}]];

const Heading4 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Heading4.displayName = 'Heading4';

export default Heading4;
