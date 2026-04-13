import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 21v-6"}],["path",{"d":"M12 9V3"}],["path",{"d":"M3 15h18"}],["path",{"d":"M3 9h18"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const TableCellsMerge = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TableCellsMerge.displayName = 'TableCellsMerge';

export default TableCellsMerge;
