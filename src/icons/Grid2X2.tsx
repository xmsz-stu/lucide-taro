import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 3v18"}],["path",{"d":"M3 12h18"}],["rect",{"x":"3","y":"3","rx":"2"}]];

const Grid2x2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Grid2x2.displayName = 'Grid2x2';

export default Grid2x2;
