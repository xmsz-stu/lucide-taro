import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 8 4-4 4 4"}],["path",{"d":"M7 4v16"}],["path",{"d":"M11 12h10"}],["path",{"d":"M11 16h7"}],["path",{"d":"M11 20h4"}]];

const ArrowUpWideNarrow = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowUpWideNarrow.displayName = 'ArrowUpWideNarrow';

export default ArrowUpWideNarrow;
