import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 2v20"}],["path",{"d":"m8 18 4 4 4-4"}],["path",{"d":"m8 6 4-4 4 4"}]];

const MoveVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveVertical.displayName = 'MoveVertical';

export default MoveVertical;
