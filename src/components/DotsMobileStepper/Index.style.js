import { styled } from '@mui/system';
import MobileStepper from '@mui/material/MobileStepper';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const CustomMobileStepper = styled(MobileStepper)`
  max-width: 400px;
`;

export const Dot = styled('div')`
  width: 12px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-right: 8px;
`;

export const ActiveDot = styled('div')`
  width: 12px;
  height: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  margin-right: 8px;
`;
