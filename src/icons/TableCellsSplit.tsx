import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 15V9"}],["path",{"d":"M3 15h18"}],["path",{"d":"M3 9h18"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const TableCellsSplit = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TableCellsSplit.displayName = 'TableCellsSplit';

export default TableCellsSplit;
