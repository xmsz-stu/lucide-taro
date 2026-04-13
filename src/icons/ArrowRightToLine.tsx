import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M17 12H3"}],["path",{"d":"m11 18 6-6-6-6"}],["path",{"d":"M21 5v14"}]];

const ArrowRightToLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowRightToLine.displayName = 'ArrowRightToLine';

export default ArrowRightToLine;
