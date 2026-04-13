import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{"d":"M12 7v10"}],["path",{"d":"M16 7v10"}]];

const PilcrowSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PilcrowSquare.displayName = 'PilcrowSquare';

export default PilcrowSquare;
