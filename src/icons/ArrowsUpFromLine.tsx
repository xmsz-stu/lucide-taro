import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m4 6 3-3 3 3"}],["path",{"d":"M7 17V3"}],["path",{"d":"m14 6 3-3 3 3"}],["path",{"d":"M17 17V3"}],["path",{"d":"M4 21h16"}]];

const ArrowsUpFromLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ArrowsUpFromLine.displayName = 'ArrowsUpFromLine';

export default ArrowsUpFromLine;
