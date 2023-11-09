interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Read job positions',
    'Read employee information',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage user information',
    'Manage job positions',
    'Manage employee data',
    'Manage attendance records',
    'Manage leave requests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/68de4793-ae6c-4bc5-a970-5308b69be838',
};
