import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 12h.01"}],["path",{"d":"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{"d":"M2 20h8"}],["path",{"d":"M20 17v-2a2 2 0 1 0-4 0v2"}],["rect",{"x":"14","y":"17","rx":"1"}]];

const DoorClosedLocked = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DoorClosedLocked.displayName = 'DoorClosedLocked';

export default DoorClosedLocked;
