export type IntentType = 'learn' | 'earn';
export type LegalDocType = 'privacy' | 'terms' | 'disclaimer';

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  duration: string;
  tools: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  salaryRange: string;
  workMode: string;
  openings: number;
  eligibility: string;
  keyDuties: string[];
  skillsRequired: string[];
  iconName: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  intent: IntentType;
  selectedProgramOrRole: string;
  qualification?: string;
  message?: string;
  createdAt: string;
}
