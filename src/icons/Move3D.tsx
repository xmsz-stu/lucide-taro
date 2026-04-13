import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 3v16h16"}],["path",{"d":"m5 19 6-6"}],["path",{"d":"m2 6 3-3 3 3"}],["path",{"d":"m18 16 3 3-3 3"}]];

const Move3d = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Move3d.displayName = 'Move3d';

export default Move3d;
