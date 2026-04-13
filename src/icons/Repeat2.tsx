import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m2 9 3-3 3 3"}],["path",{"d":"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{"d":"m22 15-3 3-3-3"}],["path",{"d":"M11 6h6a2 2 0 0 1 2 2v10"}]];

const Repeat2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Repeat2.displayName = 'Repeat2';

export default Repeat2;
