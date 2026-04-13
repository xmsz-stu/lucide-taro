import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 3v14"}],["path",{"d":"M12 3v8"}],["path",{"d":"M19 3v18"}]];

const Kanban = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Kanban.displayName = 'Kanban';

export default Kanban;
