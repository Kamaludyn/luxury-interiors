import { List } from "phosphor-react";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="md:hidden w-full flex items-center px-4 py-3 border-b bg-surface-500 dark:bg-surface-800 border-border-500 dark:border-border-800 lg:pl-72">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-text-500 dark:text-text-700 cursor-pointer"
      >
        <List className="w-6 h-6" />
      </button>
      <h1 className="text-lg mx-auto font-semibold text-text-500 dark:text-text-700">
        Abdulkarim Ceiling and Decor
      </h1>
    </header>
  );
}
