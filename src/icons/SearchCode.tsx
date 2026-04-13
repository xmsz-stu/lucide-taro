import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m13 13.5 2-2.5-2-2.5"}],["path",{"d":"m21 21-4.3-4.3"}],["path",{"d":"M9 8.5 7 11l2 2.5"}],["circle",{"cx":"11","cy":"11","r":"8"}]];

const SearchCode = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SearchCode.displayName = 'SearchCode';

export default SearchCode;
