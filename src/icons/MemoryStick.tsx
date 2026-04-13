import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 12v-2"}],["path",{"d":"M12 18v-2"}],["path",{"d":"M16 12v-2"}],["path",{"d":"M16 18v-2"}],["path",{"d":"M2 11h1.5"}],["path",{"d":"M20 18v-2"}],["path",{"d":"M20.5 11H22"}],["path",{"d":"M4 18v-2"}],["path",{"d":"M8 12v-2"}],["path",{"d":"M8 18v-2"}],["rect",{"x":"2","y":"6","rx":"2"}]];

const MemoryStick = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MemoryStick.displayName = 'MemoryStick';

export default MemoryStick;
