import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 2v8"}],["path",{"d":"M12.8 21.6A2 2 0 1 0 14 18H2"}],["path",{"d":"M17.5 10a2.5 2.5 0 1 1 2 4H2"}],["path",{"d":"m6 6 4 4 4-4"}]];

const WindArrowDown = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

WindArrowDown.displayName = 'WindArrowDown';

export default WindArrowDown;
