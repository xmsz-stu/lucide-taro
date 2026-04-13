import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"6","rx":"1"}],["path",{"d":"M17 14v7"}],["path",{"d":"M7 14v7"}],["path",{"d":"M17 3v3"}],["path",{"d":"M7 3v3"}],["path",{"d":"M10 14 2.3 6.3"}],["path",{"d":"m14 6 7.7 7.7"}],["path",{"d":"m8 6 8 8"}]];

const Construction = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Construction.displayName = 'Construction';

export default Construction;
