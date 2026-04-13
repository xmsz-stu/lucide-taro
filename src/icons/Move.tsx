import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 2v20"}],["path",{"d":"m15 19-3 3-3-3"}],["path",{"d":"m19 9 3 3-3 3"}],["path",{"d":"M2 12h20"}],["path",{"d":"m5 9-3 3 3 3"}],["path",{"d":"m9 5 3-3 3 3"}]];

const Move = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Move.displayName = 'Move';

export default Move;
