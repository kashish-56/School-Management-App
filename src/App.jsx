import React from 'react';
import StudentForm from './features/StudentForm';
import StudentList from './features/StudentList';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="mx-auto max-w-4xl">
        
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600 border border-indigo-100 mb-3 shadow-xs">
            ⚡ Redux Toolkit Mini Hackathon(Sheriyans Coding School)
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            🎓 Student Management System
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
            Manage student records efficiently with real-time state management powered by Redux Toolkit.
          </p>
        </header>

        <main className="space-y-6">
          <StudentForm />
          <StudentList />
        </main>

        <footer className="mt-12 text-center text-xs text-slate-400 border-t border-slate-200/60 pt-6">
          <p>Built with React, Redux Toolkit & Tailwind CSS</p>
          <p>© Made with <span className='text-[#e25555]'>♥</span> by Kashish </p>
        </footer>

      </div>
    </div>
  );
}