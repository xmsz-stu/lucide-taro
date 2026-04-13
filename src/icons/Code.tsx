import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m16 18 6-6-6-6"}],["path",{"d":"m8 6-6 6 6 6"}]];

const Code = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Code.displayName = 'Code';

export default Code;
