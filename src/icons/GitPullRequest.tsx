import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{}]];

const GitPullRequest = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitPullRequest.displayName = 'GitPullRequest';

export default GitPullRequest;
