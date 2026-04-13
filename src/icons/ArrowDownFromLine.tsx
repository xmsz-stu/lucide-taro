import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M19 3H5"}],["path",{"d":"M12 21V7"}],["path",{"d":"m6 15 6 6 6-6"}]];

const ArrowDownFromLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownFromLine.displayName = 'ArrowDownFromLine';

export default ArrowDownFromLine;
