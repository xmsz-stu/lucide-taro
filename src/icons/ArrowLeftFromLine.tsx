import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m9 6-6 6 6 6"}],["path",{"d":"M3 12h14"}],["path",{"d":"M21 19V5"}]];

const ArrowLeftFromLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowLeftFromLine.displayName = 'ArrowLeftFromLine';

export default ArrowLeftFromLine;
