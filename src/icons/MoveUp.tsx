import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 6L12 2L16 6"}],["path",{"d":"M12 2V22"}]];

const MoveUp = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MoveUp.displayName = 'MoveUp';

export default MoveUp;
