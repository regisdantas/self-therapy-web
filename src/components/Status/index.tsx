import React from 'react';
import { IStatus } from '../../hooks/useStatus';
import { StatusView } from './styles';

interface IStatusProps {
  status: IStatus | null;
}

const Status: React.FC<IStatusProps> = ({ status }: IStatusProps) => {
  return status ? (
    <StatusView type={status?.type}>
      <strong>{status?.message}</strong>
    </StatusView>
  ) : (
    <></>
  );
};

export default Status;
