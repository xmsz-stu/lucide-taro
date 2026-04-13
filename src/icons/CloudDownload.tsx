import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 13v8l-4-4"}],["path",{"d":"m12 21 4-4"}],["path",{"d":"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]];

const CloudDownload = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CloudDownload.displayName = 'CloudDownload';

export default CloudDownload;
