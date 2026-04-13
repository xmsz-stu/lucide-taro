import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 19V5"}],["path",{"d":"m13 6-6 6 6 6"}],["path",{"d":"M7 12h14"}]];

const ArrowLeftToLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowLeftToLine.displayName = 'ArrowLeftToLine';

export default ArrowLeftToLine;
