export type Project = {
  id: string;
  name: string;
  location: string;
  status: "On Track" | "Delayed" | "Ahead";
  progress: number;
  startDate: string;
  endDate: string;
  tasks: number;
  workers: number;
  materialCost: number;
  pendingTasks: number;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Lotus Residency",
    location: "Pune, Maharashtra",
    status: "On Track",
    progress: 80,
    startDate: "26/01/2025",
    endDate: "18/11/2026",
    tasks: 70,
    workers: 45000,
    materialCost: 12.5,
    pendingTasks: 10,
  },
  {
    id: "2",
    name: "Metro Tower",
    location: "Mumbai, Maharashtra",
    status: "Delayed",
    progress: 45,
    startDate: "12/03/2024",
    endDate: "30/09/2025",
    tasks: 52,
    workers: 45000,
    materialCost: 12.5,
    pendingTasks: 10,
  },
  {
    id: "3",
    name: "Smart City",
    location: "Delhi, NCR",
    status: "On Track",
    progress: 82,
    startDate: "01/02/2025",
    endDate: "20/12/2026",
    tasks: 110,
    workers: 45000,
    materialCost: 12.5,
    pendingTasks: 10,
  },
  {
    id: "4",
    name: "Lunar Residency",
    location: "Delhi, NCR",
    status: "Ahead",
    progress: 90,
    startDate: "10/01/2025",
    endDate: "15/08/2026",
    tasks: 95,
    workers: 45000,
    materialCost: 12.5,
   pendingTasks: 10,
  },
  
];
