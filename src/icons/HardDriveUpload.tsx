import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m16 6-4-4-4 4"}],["path",{"d":"M12 2v8"}],["rect",{"x":"2","y":"14","rx":"2"}],["path",{"d":"M6 18h.01"}],["path",{"d":"M10 18h.01"}]];

const HardDriveUpload = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

HardDriveUpload.displayName = 'HardDriveUpload';

export default HardDriveUpload;
