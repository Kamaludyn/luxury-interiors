const ProjectDetailsPlaceholder = () => {
  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden animate-pulse">
      {/* HEADER SKELETON */}
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <div className="container mx-auto">
          <div className="h-10 w-64 bg-primary-500/40 rounded-md mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto p-6 md:py-12 lg:px-20 relative z-10">
        {/* IMAGE + SUMMARY SECTION */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full my-4 md:my-10">
          {/* IMAGE SKELETON */}
          <div className="w-full md:w-[60%] h-[60vh] rounded-md bg-surface-600 dark:bg-surface-600/20"></div>

          {/* TEXT SKELETON */}
          <div className="w-full md:w-[40%] space-y-4">
            {/* Paragraph lines */}
            <div className="h-4 bg-surface-600 dark:bg-surface-600/50 rounded w-full"></div>
            <div className="h-4 bg-surface-600 dark:bg-surface-600/50 rounded w-11/12"></div>

            {/* Date Row */}
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center gap-3">
                <div className="h-4 w-28 bg-surface-600 dark:bg-surface-600/50 rounded"></div>
                <div className="flex-1 h-0.5 mr-2 bg-primary-500/40"></div>
              </div>
              <div className="h-4 w-32 bg-surface-600 dark:bg-surface-600/50 rounded"></div>
            </div>
          </div>
        </div>

        {/* FULL DESCRIPTION */}
        <div className="space-y-4">
          <div className="h-10 w-80 bg-primary-500/40 rounded"></div>

          {/* Paragraph skeleton */}
          <div className="h-4 bg-surface-600 dark:bg-surface-600/20 rounded w-full"></div>
          <div className="h-4 bg-surface-600 dark:bg-surface-600/20 rounded w-11/12"></div>
          <div className="h-4 bg-surface-600 dark:bg-surface-600/20 rounded w-10/12"></div>
          <div className="h-4 bg-surface-600 dark:bg-surface-600/20 rounded w-9/12"></div>
          <div className="h-4 bg-surface-600 dark:bg-surface-600/20 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPlaceholder;
