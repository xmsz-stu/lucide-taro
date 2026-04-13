import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"11","cy":"11","r":"8"}],["path",{"d":"m21 21-4.3-4.3"}],["path",{"d":"M11 7v4"}],["path",{"d":"M11 15h.01"}]];

const SearchAlert = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SearchAlert.displayName = 'SearchAlert';

export default SearchAlert;
