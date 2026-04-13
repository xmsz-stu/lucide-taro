import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 3h5v5"}],["path",{"d":"M8 3H3v5"}],["path",{"d":"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{"d":"m15 9 6-6"}]];

const Split = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Split.displayName = 'Split';

export default Split;
