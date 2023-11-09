import { AttendanceInterface } from 'interfaces/attendance';
import { LeaveRequestInterface } from 'interfaces/leave-request';
import { UserInterface } from 'interfaces/user';
import { JobPositionInterface } from 'interfaces/job-position';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  job_position_id: string;
  date_hired?: any;
  date_terminated?: any;
  salary?: number;
  status: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  leave_request?: LeaveRequestInterface[];
  user?: UserInterface;
  job_position?: JobPositionInterface;
  _count?: {
    attendance?: number;
    leave_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_position_id?: string;
  status?: string;
}
