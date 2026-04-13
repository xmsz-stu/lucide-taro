import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 5h6"}],["path",{"d":"M19 2v6"}],["path",{"d":"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{"cx":"9","cy":"9","r":"2"}]];

const ImagePlus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ImagePlus.displayName = 'ImagePlus';

export default ImagePlus;
