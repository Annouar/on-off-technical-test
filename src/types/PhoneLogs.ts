export interface PhoneLog {
  id: string;
  phoneType: 'Mobile' | 'Work' | 'Home';
  phoneNumber: string;
  date: string;
}

export type GroupedLogs = Record<string, PhoneLog[]>;
