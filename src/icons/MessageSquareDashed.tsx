import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 3h2"}],["path",{"d":"M16 19h-2"}],["path",{"d":"M2 12v-2"}],["path",{"d":"M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149"}],["path",{"d":"M20 19a2 2 0 0 0 2-2v-1"}],["path",{"d":"M22 10v2"}],["path",{"d":"M22 6V5a2 2 0 0 0-2-2"}],["path",{"d":"M4 3a2 2 0 0 0-2 2v1"}],["path",{"d":"M8 19h2"}],["path",{"d":"M8 3h2"}]];

const MessageSquareDashed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MessageSquareDashed.displayName = 'MessageSquareDashed';

export default MessageSquareDashed;
