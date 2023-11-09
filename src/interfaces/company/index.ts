import { JobPositionInterface } from 'interfaces/job-position';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  job_position?: JobPositionInterface[];
  user?: UserInterface[];

  _count?: {
    job_position?: number;
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  website?: string;
  name?: string;
}
