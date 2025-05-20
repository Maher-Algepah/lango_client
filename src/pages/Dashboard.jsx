import React, { useEffect, useState } from 'react';
import ProtectedNavbar from '../components/ProtectedNavbar';

const Dashboard = () => {
  const username = localStorage.getItem('username');
  const [userInfo, setUserInfo] = useState({
    memberSince: 'March 2024',
    streak: 5,
    totalXP: 1250,
    level: 3,
    lessonsCompleted: 12,
    currentLanguage: 'Spanish',
    nextLesson: 'Basic Greetings'
  });

  useEffect(() => {
    console.log('Stored username:', username);
    console.log('All localStorage items:', { ...localStorage });
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProtectedNavbar username={username || 'User'} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Overview Section */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome back, {username}!</h2>
                <p className="mt-1 text-sm text-gray-500">Member since {userInfo.memberSince}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Current Streak</p>
                  <p className="text-2xl font-bold text-green-500">{userInfo.streak} days</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Total XP</p>
                  <p className="text-2xl font-bold text-blue-500">{userInfo.totalXP}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="text-2xl font-bold text-purple-500">{userInfo.level}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current Progress Section */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Current Progress</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Current Language</p>
                  <p className="text-lg font-semibold">{userInfo.currentLanguage}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lessons Completed</p>
                  <p className="text-lg font-semibold">{userInfo.lessonsCompleted}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Lesson</p>
                  <p className="text-lg font-semibold">{userInfo.nextLesson}</p>
                </div>
                <div className="pt-2">
                  <button className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-semibold">Continue Learning</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-4">
                {/* Main Action */}
                <button className="w-full flex items-center justify-center space-x-3 bg-transparent border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors shadow-sm group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-lg font-semibold">Start Speaking Practice</span>
                </button>

                {/* Secondary Actions Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm">Vocabulary</span>
                  </button>
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-sm">Quiz</span>
                  </button>
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm">Friends</span>
                  </button>
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm">Daily Goal</span>
                  </button>
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">Streak</span>
                  </button>
                  <button className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm">Power-ups</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-6 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-yellow-500 text-2xl mb-2">🏆</div>
                <p className="font-semibold">5 Day Streak</p>
                <p className="text-sm text-gray-500">Keep it up!</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-yellow-500 text-2xl mb-2">⭐</div>
                <p className="font-semibold">Level Up!</p>
                <p className="text-sm text-gray-500">Reached Level 3</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-yellow-500 text-2xl mb-2">🎯</div>
                <p className="font-semibold">Perfect Score</p>
                <p className="text-sm text-gray-500">Completed 3 lessons</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 