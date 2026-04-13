import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 12h6"}],["path",{"d":"M22 12h-6"}],["path",{"d":"M12 2v2"}],["path",{"d":"M12 8v2"}],["path",{"d":"M12 14v2"}],["path",{"d":"M12 20v2"}],["path",{"d":"m19 9-3 3 3 3"}],["path",{"d":"m5 15 3-3-3-3"}]];

const FoldHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

FoldHorizontal.displayName = 'FoldHorizontal';

export default FoldHorizontal;
