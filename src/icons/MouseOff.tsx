import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 6v.343"}],["path",{"d":"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{"d":"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{"d":"M22 22 2 2"}]];

const MouseOff = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MouseOff.displayName = 'MouseOff';

export default MouseOff;
