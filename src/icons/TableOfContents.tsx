import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5H3"}],["path",{"d":"M16 12H3"}],["path",{"d":"M16 19H3"}],["path",{"d":"M21 5h.01"}],["path",{"d":"M21 12h.01"}],["path",{"d":"M21 19h.01"}]];

const TableOfContents = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TableOfContents.displayName = 'TableOfContents';

export default TableOfContents;
