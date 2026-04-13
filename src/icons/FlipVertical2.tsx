import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m17 3-5 5-5-5h10"}],["path",{"d":"m17 21-5-5-5 5h10"}],["path",{"d":"M4 12H2"}],["path",{"d":"M10 12H8"}],["path",{"d":"M16 12h-2"}],["path",{"d":"M22 12h-2"}]];

const FlipVertical2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

FlipVertical2.displayName = 'FlipVertical2';

export default FlipVertical2;
