import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377"}],["path",{"d":"m16.5 16.5 5 5"}],["path",{"d":"m16.5 21.5 5-5"}],["path",{"d":"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5"}],["path",{"d":"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]];

const PrinterX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PrinterX.displayName = 'PrinterX';

export default PrinterX;
