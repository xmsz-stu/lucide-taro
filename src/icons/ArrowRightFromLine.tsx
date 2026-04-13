import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 5v14"}],["path",{"d":"M21 12H7"}],["path",{"d":"m15 18 6-6-6-6"}]];

const ArrowRightFromLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowRightFromLine.displayName = 'ArrowRightFromLine';

export default ArrowRightFromLine;
