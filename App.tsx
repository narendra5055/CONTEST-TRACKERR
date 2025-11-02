
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CONTESTS_DATA } from './constants';
import { Contest, Platform, PlatformFilter, StatusFilter } from './types';
import Header from './components/Header';
import FilterControls from './components/FilterControls';
import ContestCard from './components/ContestCard';
import FeaturedContest from './components/FeaturedContest';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [contests, setContests] = useState<Contest[]>(CONTESTS_DATA);
  const [platformFilter, setPlatformFilter] = useState<PlatformFilter>('All');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const filteredContests = useMemo(() => {
    return contests
      .filter(contest => {
        if (platformFilter === 'All') return true;
        return contest.platform === platformFilter;
      })
      .filter(contest => {
        const now = new Date().getTime();
        const startTime = contest.startTime.getTime();
        const endTime = contest.endTime.getTime();

        if (statusFilter === 'All') return true;
        if (statusFilter === 'Upcoming') return startTime > now;
        if (statusFilter === 'Ongoing') return startTime <= now && endTime > now;
        return false;
      })
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  }, [contests, platformFilter, statusFilter]);

  const nextContest = useMemo(() => {
      const now = new Date().getTime();
      return contests
        .filter(c => c.startTime.getTime() > now)
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())[0] || null;
  }, [contests]);

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        
        {nextContest && <FeaturedContest contest={nextContest} />}

        <div className="sticky top-0 z-10 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 mb-8">
          <FilterControls
            platformFilter={platformFilter}
            setPlatformFilter={setPlatformFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </div>
        
        {filteredContests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContests.map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-slate-500 dark:text-slate-400">No Contests Found</h2>
            <p className="text-slate-400 dark:text-slate-500 mt-2">Try adjusting your filters.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
