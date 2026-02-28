export type Urgency = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type TaskStatus = "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CLOSED";
export type ApplicationStatus =
  | "APPLIED"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "REJECTED";

export interface Organization {
  id: string;
  name: string;
  description: string;
  logoUrl: string | null;
  website: string | null;
  causeArea: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  skillsRequired: string[];
  causeArea: string;
  timeEstimate: number;
  urgency: Urgency;
  status: TaskStatus;
  organizationId: string;
  organization: Organization;
  createdAt: string;
}

export interface TaskApplication {
  id: string;
  userId: string;
  taskId: string;
  status: ApplicationStatus;
  hoursLogged: number | null;
  completedAt: string | null;
  task: Task;
}

export interface UserBadge {
  id: string;
  earnedAt: string;
  badge: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
}

export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "GreenEarth Foundation",
    description:
      "Fighting climate change through community action, education, and sustainable practices. We empower local communities to protect their environment.",
    logoUrl: null,
    website: "https://greenearth.org",
    causeArea: "Environment",
  },
  {
    id: "org-2",
    name: "CodeForGood",
    description:
      "Building technology solutions for nonprofits that can't afford development teams. We match volunteer developers with organizations in need.",
    logoUrl: null,
    website: "https://codeforgood.org",
    causeArea: "Education",
  },
  {
    id: "org-3",
    name: "Youth Mentors Network",
    description:
      "Connecting experienced professionals with young people from underserved communities for career guidance and skill development.",
    logoUrl: null,
    website: "https://youthmentors.org",
    causeArea: "Youth",
  },
  {
    id: "org-4",
    name: "HealthBridge International",
    description:
      "Providing healthcare access information and resources to underserved communities worldwide through digital tools and volunteer support.",
    logoUrl: null,
    website: "https://healthbridge.org",
    causeArea: "Health",
  },
  {
    id: "org-5",
    name: "LiteracyFirst",
    description:
      "Promoting literacy and education access for children and adults in low-income areas through volunteer tutoring and resource development.",
    logoUrl: null,
    website: "https://literacyfirst.org",
    causeArea: "Education",
  },
];

export const tasks: Task[] = [
  {
    id: "task-1",
    title: "Translate FAQ Page to Spanish",
    description:
      "We need our FAQ page translated from English to Spanish for our Latin American audience. The page has about 15 questions and answers covering donation processes, volunteer opportunities, and our mission. Accuracy and natural-sounding language are important.",
    skillsRequired: ["Spanish", "Translation"],
    causeArea: "Environment",
    timeEstimate: 20,
    urgency: "HIGH",
    status: "OPEN",
    organizationId: "org-1",
    organization: organizations[0],
    createdAt: "2025-02-25T10:00:00Z",
  },
  {
    id: "task-2",
    title: "Review Donation Page Code",
    description:
      "Our donation page has some accessibility issues and potential performance problems. We need a developer to review the React code, identify issues, and suggest fixes. The codebase is on GitHub and we'll grant access upon acceptance.",
    skillsRequired: ["React", "Code Review", "Accessibility"],
    causeArea: "Education",
    timeEstimate: 30,
    urgency: "MEDIUM",
    status: "OPEN",
    organizationId: "org-2",
    organization: organizations[1],
    createdAt: "2025-02-24T14:00:00Z",
  },
  {
    id: "task-3",
    title: "Design Social Media Banner",
    description:
      "Create an eye-catching banner for our upcoming youth mentoring campaign on Instagram and Twitter. We need both landscape (1200x628) and square (1080x1080) versions. Brand colors: blue (#2563EB) and white.",
    skillsRequired: ["Design", "Canva"],
    causeArea: "Youth",
    timeEstimate: 15,
    urgency: "LOW",
    status: "OPEN",
    organizationId: "org-3",
    organization: organizations[2],
    createdAt: "2025-02-26T09:00:00Z",
  },
  {
    id: "task-4",
    title: "Proofread Health Newsletter",
    description:
      "Our monthly health newsletter needs proofreading before distribution to 5,000 subscribers. Check for grammar, clarity, and medical accuracy. The newsletter is about 1,500 words covering mental health awareness topics.",
    skillsRequired: ["Writing", "Proofreading"],
    causeArea: "Health",
    timeEstimate: 20,
    urgency: "HIGH",
    status: "OPEN",
    organizationId: "org-4",
    organization: organizations[3],
    createdAt: "2025-02-27T08:00:00Z",
  },
  {
    id: "task-5",
    title: "Create Reading Level Assessment Quiz",
    description:
      "Design a simple 10-question quiz to help us assess the reading level of adult learners joining our program. Questions should progress from basic to intermediate. Format as a Google Form or similar.",
    skillsRequired: ["Education", "Content Writing"],
    causeArea: "Education",
    timeEstimate: 25,
    urgency: "MEDIUM",
    status: "OPEN",
    organizationId: "org-5",
    organization: organizations[4],
    createdAt: "2025-02-23T11:00:00Z",
  },
  {
    id: "task-6",
    title: "Set Up Google Analytics Dashboard",
    description:
      "We recently added Google Analytics to our website but need help setting up a custom dashboard to track key metrics: page views, donation conversions, volunteer sign-ups, and traffic sources.",
    skillsRequired: ["Analytics", "Google Analytics"],
    causeArea: "Environment",
    timeEstimate: 30,
    urgency: "LOW",
    status: "OPEN",
    organizationId: "org-1",
    organization: organizations[0],
    createdAt: "2025-02-22T15:00:00Z",
  },
  {
    id: "task-7",
    title: "Write Python Script to Clean Donor Data",
    description:
      "We have a CSV file with ~2,000 donor records that has duplicates, inconsistent formatting, and missing fields. Need a Python script to clean and deduplicate the data. We'll provide a sample file.",
    skillsRequired: ["Python", "Data Cleaning"],
    causeArea: "Education",
    timeEstimate: 30,
    urgency: "MEDIUM",
    status: "OPEN",
    organizationId: "org-2",
    organization: organizations[1],
    createdAt: "2025-02-21T16:00:00Z",
  },
  {
    id: "task-8",
    title: "Record 2-Minute Intro Video Script",
    description:
      "Write a compelling 2-minute video script introducing our youth mentoring program. The tone should be warm, inspiring, and accessible to both potential mentors and mentees aged 16-25.",
    skillsRequired: ["Copywriting", "Video"],
    causeArea: "Youth",
    timeEstimate: 20,
    urgency: "LOW",
    status: "OPEN",
    organizationId: "org-3",
    organization: organizations[2],
    createdAt: "2025-02-20T12:00:00Z",
  },
];

export const userApplications: TaskApplication[] = [
  {
    id: "app-1",
    userId: "user-1",
    taskId: "task-1",
    status: "COMPLETED",
    hoursLogged: 0.5,
    completedAt: "2025-02-26T12:00:00Z",
    task: tasks[0],
  },
  {
    id: "app-2",
    userId: "user-1",
    taskId: "task-3",
    status: "IN_PROGRESS",
    hoursLogged: null,
    completedAt: null,
    task: tasks[2],
  },
];

export const userBadges: UserBadge[] = [
  {
    id: "ub-1",
    earnedAt: "2025-02-26T12:00:00Z",
    badge: {
      id: "badge-1",
      name: "First Steps",
      description: "Completed your first volunteer task",
      icon: "Star",
    },
  },
  {
    id: "ub-2",
    earnedAt: "2025-02-26T12:00:00Z",
    badge: {
      id: "badge-2",
      name: "Linguist",
      description: "Completed a translation task",
      icon: "Languages",
    },
  },
];

export const allSkills = [
  "Spanish",
  "Translation",
  "React",
  "Code Review",
  "Accessibility",
  "Design",
  "Canva",
  "Writing",
  "Proofreading",
  "Education",
  "Content Writing",
  "Analytics",
  "Google Analytics",
  "Python",
  "Data Cleaning",
  "Copywriting",
  "Video",
];

export const causeAreas = [
  "Environment",
  "Education",
  "Youth",
  "Health",
  "Community",
  "Animals",
];

export const urgencyColors: Record<Urgency, string> = {
  LOW: "bg-green-100 text-green-800",
  MEDIUM: "bg-yellow-100 text-yellow-800",
  HIGH: "bg-orange-100 text-orange-800",
  CRITICAL: "bg-red-100 text-red-800",
};
