import { styled } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';

export const ProgressContainer = styled('div')`
  width: 100%;
`;

export const ProgressWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

export const Progress = styled(LinearProgress)`
  width: 100%;
  margin-right: 1px;
  height: 22px;
  border-radius: 12px;
  background: #D9D9D9;

  & .MuiLinearProgress-bar {
    background-color: #052970;
  }
`;

export const ProgressLabel = styled('div')`
  min-width: 35px;
`;
