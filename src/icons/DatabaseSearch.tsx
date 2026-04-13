import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 11.693V5"}],["path",{"d":"m22 22-1.875-1.875"}],["path",{"d":"M3 12a9 3 0 0 0 8.697 2.998"}],["path",{"d":"M3 5v14a9 3 0 0 0 9.28 2.999"}],["circle",{"cx":"18","cy":"18","r":"3"}],["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}]];

const DatabaseSearch = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DatabaseSearch.displayName = 'DatabaseSearch';

export default DatabaseSearch;
