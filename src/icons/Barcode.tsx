import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 5v14"}],["path",{"d":"M8 5v14"}],["path",{"d":"M12 5v14"}],["path",{"d":"M17 5v14"}],["path",{"d":"M21 5v14"}]];

const Barcode = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Barcode.displayName = 'Barcode';

export default Barcode;
