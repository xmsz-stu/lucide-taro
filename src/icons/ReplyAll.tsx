import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m12 17-5-5 5-5"}],["path",{"d":"M22 18v-2a4 4 0 0 0-4-4H7"}],["path",{"d":"m7 17-5-5 5-5"}]];

const ReplyAll = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ReplyAll.displayName = 'ReplyAll';

export default ReplyAll;
