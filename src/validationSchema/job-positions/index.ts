import * as yup from 'yup';

export const jobPositionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  salary: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
});
