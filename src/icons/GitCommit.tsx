import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"3"}],["line",{}],["line",{}]];

const GitCommit = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitCommit.displayName = 'GitCommit';

export default GitCommit;
