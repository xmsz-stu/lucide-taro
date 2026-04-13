import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 8V7"}],["path",{"d":"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{"d":"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{"d":"M7 17h.01"}],["path",{"d":"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{"x":"7","y":"7","rx":"1"}]];

const ScanQrCode = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ScanQrCode.displayName = 'ScanQrCode';

export default ScanQrCode;
