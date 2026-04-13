import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H11"}],["path",{"d":"M21 12H11"}],["path",{"d":"M21 19H11"}],["path",{"d":"m7 8-4 4 4 4"}]];

const Outdent = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Outdent.displayName = 'Outdent';

export default Outdent;
