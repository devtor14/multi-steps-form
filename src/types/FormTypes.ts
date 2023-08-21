import { ReactNode } from 'react';

export type FormType = {
  legend: string;
  description: string;
  children: ReactNode;
};

export type FormInformation = {
  userData: {
    name: undefined | string;
    email: undefined | string;
    number: undefined | string;
  };
  plan: { name: undefined | string; price: undefined | number };
  planType: boolean;
  addOns: [] | [{ name: undefined | string; price: undefined | number }];
  step: number;
  errorOpacity: number;
  errorMessage: string[];
  success: boolean;
  total: number;
};
