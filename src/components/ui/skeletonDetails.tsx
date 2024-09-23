/* eslint-disable prettier/prettier */
"use client";
import React from "react";

const cn = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(" ");

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-700", className)}
      {...props}
    />
  );
};

export const MovieDetailsSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen w-full h-full bg-neutral-900 text-white">
      <div className="relative md:h-[100vh] 2xl:h-[80vh] bg-neutral-900">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
        <div className="absolute top-4 left-4 p-2 bg-black/50 rounded-full">
          <div className="w-6 h-6" />
        </div>
      </div>

      <div className="px-4 py-8 absolute ml-16 top-1/2 max-w-7xl">
        <div className="flex items-start gap-8">
          <div className="flex gap-5 flex-col">
            <Skeleton className="w-[200px] h-[300px] rounded-lg" />
            <Skeleton className="w-[200px] h-10 rounded-lg" />
          </div>

          <div className="flex-1">
            <Skeleton className="w-3/4 h-10 mb-2" />
            <Skeleton className="w-1/2 h-6 mb-4" />
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="w-24 h-8 rounded-full" />
              <Skeleton className="w-10 h-10 rounded-full" />
            </div>
            <Skeleton className="w-1/4 h-6 mb-2" />
            <Skeleton className="w-full h-24 mb-6" />
            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="w-20 h-8 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 px-20">
        <Skeleton className="w-1/4 h-8 mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <Skeleton className="w-[150px] h-[225px] rounded-lg mb-2" />
                <Skeleton className="w-3/4 h-4" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
