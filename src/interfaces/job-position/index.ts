import { EmployeeInterface } from 'interfaces/employee';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobPositionInterface {
  id?: string;
  title: string;
  description?: string;
  salary?: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  company?: CompanyInterface;
  _count?: {
    employee?: number;
  };
}

export interface JobPositionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
}
