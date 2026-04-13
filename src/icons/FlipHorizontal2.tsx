import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m3 7 5 5-5 5V7"}],["path",{"d":"m21 7-5 5 5 5V7"}],["path",{"d":"M12 20v2"}],["path",{"d":"M12 14v2"}],["path",{"d":"M12 8v2"}],["path",{"d":"M12 2v2"}]];

const FlipHorizontal2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

FlipHorizontal2.displayName = 'FlipHorizontal2';

export default FlipHorizontal2;
