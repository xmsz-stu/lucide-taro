import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m18 9-6-6-6 6"}],["path",{"d":"M12 3v14"}],["path",{"d":"M5 21h14"}]];

const ArrowUpFromLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpFromLine.displayName = 'ArrowUpFromLine';

export default ArrowUpFromLine;
