import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H3"}],["path",{"d":"M10 12H3"}],["path",{"d":"M10 19H3"}],["circle",{"cx":"17","cy":"15","r":"3"}],["path",{"d":"m21 19-1.9-1.9"}]];

const TextSearch = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextSearch.displayName = 'TextSearch';

export default TextSearch;
