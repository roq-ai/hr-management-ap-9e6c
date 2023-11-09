import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  date_hired: yup.date().nullable(),
  date_terminated: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  job_position_id: yup.string().nullable().required(),
});
