import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"14","y":"14","rx":"2"}],["rect",{"x":"2","y":"2","rx":"2"}],["path",{"d":"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{"d":"M14 7h1a2 2 0 0 1 2 2v1"}]];

const SendToBack = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SendToBack.displayName = 'SendToBack';

export default SendToBack;
