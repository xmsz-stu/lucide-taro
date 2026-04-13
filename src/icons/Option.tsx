import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 3h6l6 18h6"}],["path",{"d":"M14 3h7"}]];

const Option = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Option.displayName = 'Option';

export default Option;
