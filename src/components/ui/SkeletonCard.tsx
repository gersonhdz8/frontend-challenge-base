import React from "react";

export default function MovieCardSkeleton(): React.JSX.Element {
  return (
    <div className="grid grid-cols-4 w-full gap-5">
      <div className="w-full max-w-sm h-auto border border-slate-300/20 rounded-lg shadow bg-neutral-800 animate-pulse">
        <div className="rounded-t-lg h-[300px] bg-neutral-700" />
        <div className="p-3">
          <div className="h-6 bg-neutral-700 rounded w-3/4 mb-2" />
          <div className="flex items-center mt-2.5 mb-5">
            <div className="h-4 bg-neutral-700 rounded w-16" />
            <div className="h-4 bg-neutral-700 rounded w-12 ms-3" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-neutral-700 rounded w-24" />
            <div className="h-8 w-8 bg-neutral-700 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm h-auto border border-slate-300/20 rounded-lg shadow bg-neutral-800 animate-pulse">
        <div className="rounded-t-lg h-[300px] bg-neutral-700" />
        <div className="p-3">
          <div className="h-6 bg-neutral-700 rounded w-3/4 mb-2" />
          <div className="flex items-center mt-2.5 mb-5">
            <div className="h-4 bg-neutral-700 rounded w-16" />
            <div className="h-4 bg-neutral-700 rounded w-12 ms-3" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-neutral-700 rounded w-24" />
            <div className="h-8 w-8 bg-neutral-700 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm h-auto border border-slate-300/20 rounded-lg shadow bg-neutral-800 animate-pulse">
        <div className="rounded-t-lg h-[300px] bg-neutral-700" />
        <div className="p-3">
          <div className="h-6 bg-neutral-700 rounded w-3/4 mb-2" />
          <div className="flex items-center mt-2.5 mb-5">
            <div className="h-4 bg-neutral-700 rounded w-16" />
            <div className="h-4 bg-neutral-700 rounded w-12 ms-3" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-neutral-700 rounded w-24" />
            <div className="h-8 w-8 bg-neutral-700 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm h-auto border border-slate-300/20 rounded-lg shadow bg-neutral-800 animate-pulse">
        <div className="rounded-t-lg h-[300px] bg-neutral-700" />
        <div className="p-3">
          <div className="h-6 bg-neutral-700 rounded w-3/4 mb-2" />
          <div className="flex items-center mt-2.5 mb-5">
            <div className="h-4 bg-neutral-700 rounded w-16" />
            <div className="h-4 bg-neutral-700 rounded w-12 ms-3" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 bg-neutral-700 rounded w-24" />
            <div className="h-8 w-8 bg-neutral-700 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
