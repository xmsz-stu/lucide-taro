import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M18 6V5"}],["path",{"d":"M18 11v-1"}],["line",{}]];

const GitPullRequestDraft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitPullRequestDraft.displayName = 'GitPullRequestDraft';

export default GitPullRequestDraft;
