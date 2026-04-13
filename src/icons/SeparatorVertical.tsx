import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 3v18"}],["path",{"d":"m16 16 4-4-4-4"}],["path",{"d":"m8 8-4 4 4 4"}]];

const SeparatorVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SeparatorVertical.displayName = 'SeparatorVertical';

export default SeparatorVertical;
