import React from 'react';

export const TestimonialsSkeleton: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="h-7 w-48 rounded-full bg-slate-800/60 animate-pulse mx-auto mb-4" />
          <div className="h-10 w-3/4 max-w-md rounded-2xl bg-slate-800/80 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-2/3 max-w-sm rounded-xl bg-slate-800/50 animate-pulse mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto relative mb-20">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl relative shadow-2xl animate-pulse">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 absolute top-6 right-8" />
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-slate-800" />
              ))}
            </div>
            <div className="space-y-3 mb-8">
              <div className="h-5 w-full bg-slate-800/70 rounded-lg" />
              <div className="h-5 w-11/12 bg-slate-800/70 rounded-lg" />
              <div className="h-5 w-3/4 bg-slate-800/70 rounded-lg" />
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
              <div className="w-14 h-14 rounded-full bg-slate-800 shrink-0" />
              <div className="space-y-2">
                <div className="h-4 w-36 bg-slate-800 rounded-md" />
                <div className="h-3 w-24 bg-slate-800/70 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BlogSkeleton: React.FC = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#030712]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="h-7 w-44 rounded-full bg-slate-800/60 animate-pulse mx-auto mb-4" />
          <div className="h-10 w-2/3 max-w-md rounded-2xl bg-slate-800/80 animate-pulse mx-auto mb-4" />
          <div className="h-5 w-3/4 max-w-lg rounded-xl bg-slate-800/50 animate-pulse mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="h-9 w-24 rounded-xl bg-slate-800/70 animate-pulse shrink-0" />
            ))}
          </div>
          <div className="h-9 w-full md:w-64 rounded-xl bg-slate-800/70 animate-pulse shrink-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/70 border border-slate-800/80 animate-pulse overflow-hidden flex flex-col justify-between h-[480px]"
            >
              <div className="h-60 bg-slate-800/80 relative p-4 flex justify-between items-start">
                <div className="h-6 w-20 rounded-full bg-slate-700/80" />
                <div className="h-4 w-28 rounded bg-slate-700/60 self-end" />
              </div>
              <div className="p-6 space-y-4">
                <div className="h-6 w-11/12 rounded-md bg-slate-800/80" />
                <div className="h-6 w-3/4 rounded-md bg-slate-800/80" />
                <div className="space-y-2 mt-4">
                  <div className="h-4 w-full rounded bg-slate-800/60" />
                  <div className="h-4 w-5/6 rounded bg-slate-800/60" />
                </div>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-slate-800/60 flex justify-between items-center mt-auto">
                <div className="h-4 w-24 rounded bg-slate-800/60" />
                <div className="h-4 w-24 rounded bg-slate-800/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
