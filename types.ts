
export enum Platform {
  LeetCode = "LeetCode",
  CodeChef = "CodeChef",
  GeeksforGeeks = "GeeksforGeeks",
}

export interface Contest {
  id: string;
  name: string;
  platform: Platform;
  startTime: Date;
  endTime: Date;
  url: string;
}

export type PlatformFilter = "All" | Platform;
export type StatusFilter = "All" | "Upcoming" | "Ongoing";
