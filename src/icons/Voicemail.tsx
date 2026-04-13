import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"6","cy":"12","r":"4"}],["circle",{"cx":"18","cy":"12","r":"4"}],["line",{}]];

const Voicemail = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Voicemail.displayName = 'Voicemail';

export default Voicemail;
