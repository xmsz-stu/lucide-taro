import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 3h14"}],["path",{"d":"m18 13-6-6-6 6"}],["path",{"d":"M12 7v14"}]];

const ArrowUpToLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpToLine.displayName = 'ArrowUpToLine';

export default ArrowUpToLine;
