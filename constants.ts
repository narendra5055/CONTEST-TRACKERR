
import { Contest, Platform } from './types';

// Helper function to create dates for contests relative to the current time
const createDate = (days: number, hours: number, minutes: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + minutes);
  return date;
};

// Helper to create contest duration
const addDuration = (startDate: Date, hours: number, minutes: number): Date => {
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + hours);
  endDate.setMinutes(endDate.getMinutes() + minutes);
  return endDate;
}

// Ongoing contest (started 30 mins ago, ends in 1h 30m)
const ongoingStartTime = createDate(0, 0, -30);
const ongoingEndTime = addDuration(ongoingStartTime, 2, 0);

// Upcoming contests
const upcoming1StartTime = createDate(0, 3, 15);
const upcoming1EndTime = addDuration(upcoming1StartTime, 1, 30);

const upcoming2StartTime = createDate(1, 10, 0);
const upcoming2EndTime = addDuration(upcoming2StartTime, 2, 0);

const upcoming3StartTime = createDate(2, 5, 30);
const upcoming3EndTime = addDuration(upcoming3StartTime, 1, 0);

const upcoming4StartTime = createDate(3, 12, 0);
const upcoming4EndTime = addDuration(upcoming4StartTime, 2, 30);

const upcoming5StartTime = createDate(4, 20, 0);
const upcoming5EndTime = addDuration(upcoming5StartTime, 3, 0);

const upcoming6StartTime = createDate(5, 8, 45);
const upcoming6EndTime = addDuration(upcoming6StartTime, 1, 30);

export const CONTESTS_DATA: Contest[] = [
  {
    id: 'lc-weekly-432',
    name: 'Weekly Contest 432',
    platform: Platform.LeetCode,
    startTime: upcoming1StartTime,
    endTime: upcoming1EndTime,
    url: 'https://leetcode.com/contest/',
  },
  {
    id: 'cc-starters-150',
    name: 'Starters 150',
    platform: Platform.CodeChef,
    startTime: upcoming2StartTime,
    endTime: upcoming2EndTime,
    url: 'https://www.codechef.com/contests',
  },
  {
    id: 'gfg-weekly-180',
    name: 'Weekly Coding Contest 180',
    platform: Platform.GeeksforGeeks,
    startTime: ongoingStartTime,
    endTime: ongoingEndTime,
    url: 'https://practice.geeksforgeeks.org/contest',
  },
  {
    id: 'lc-biweekly-155',
    name: 'Biweekly Contest 155',
    platform: Platform.LeetCode,
    startTime: upcoming3StartTime,
    endTime: upcoming3EndTime,
    url: 'https://leetcode.com/contest/',
  },
  {
    id: 'cc-cookoff-95',
    name: 'Cook-Off Division 2',
    platform: Platform.CodeChef,
    startTime: upcoming4StartTime,
    endTime: upcoming4EndTime,
    url: 'https://www.codechef.com/contests',
  },
    {
    id: 'gfg-jobathon-25',
    name: 'Job-a-Thon 25',
    platform: Platform.GeeksforGeeks,
    startTime: upcoming5StartTime,
    endTime: upcoming5EndTime,
    url: 'https://practice.geeksforgeeks.org/contest',
  },
  {
    id: 'lc-weekly-433',
    name: 'Weekly Contest 433',
    platform: Platform.LeetCode,
    startTime: upcoming6StartTime,
    endTime: upcoming6EndTime,
    url: 'https://leetcode.com/contest/',
  }
];
