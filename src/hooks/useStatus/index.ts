import React from 'react';
export interface IStatus {
  type: string;
  fields: string;
  message: string;
}

export const useStatus = (initial: IStatus | null) => {
  return React.useState<IStatus | null>(initial);
};
