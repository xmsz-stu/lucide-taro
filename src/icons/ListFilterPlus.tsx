import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 5H2"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 19h6"}],["path",{"d":"M16 5h6"}],["path",{"d":"M19 8V2"}]];

const ListFilterPlus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ListFilterPlus.displayName = 'ListFilterPlus';

export default ListFilterPlus;
