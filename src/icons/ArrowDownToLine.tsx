import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 17V3"}],["path",{"d":"m6 11 6 6 6-6"}],["path",{"d":"M19 21H5"}]];

const ArrowDownToLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowDownToLine.displayName = 'ArrowDownToLine';

export default ArrowDownToLine;
