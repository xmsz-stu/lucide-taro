import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 12h12"}],["path",{"d":"M6 20V4"}],["path",{"d":"M18 20V4"}]];

const Heading = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Heading.displayName = 'Heading';

export default Heading;
