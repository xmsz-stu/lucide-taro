import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M20 18v-2a4 4 0 0 0-4-4H4"}],["path",{"d":"m9 17-5-5 5-5"}]];

const Reply = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Reply.displayName = 'Reply';

export default Reply;
