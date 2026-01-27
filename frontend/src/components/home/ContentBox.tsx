import type { ReactNode } from 'react';

interface ContentBoxProps {
  children: ReactNode;
}

export const ContentBox = ({ children }: ContentBoxProps) => {
  return (
    <main className="flex-grow px-4 pb-10 w-full relative z-10">
      <div className="max-w-4xl mx-auto bg-[#1B2A3D] rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-800/50">
        {children}
      </div>
    </main>
  );
};