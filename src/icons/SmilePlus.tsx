import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 11v1a10 10 0 1 1-9-10"}],["path",{"d":"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{}],["line",{}],["path",{"d":"M16 5h6"}],["path",{"d":"M19 2v6"}]];

const SmilePlus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SmilePlus.displayName = 'SmilePlus';

export default SmilePlus;
