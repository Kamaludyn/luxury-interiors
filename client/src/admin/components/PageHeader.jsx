import { Link } from "react-router-dom";

export default function PageHeader({
  title,
  subtitle,
  actionLabel,
  actionLink,
  onActionClick,
  actionIcon: ActionIcon,
  isButton = false,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold text-text-500 dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-text-400 dark:text-text-600">{subtitle}</p>
        )}
      </div>

      {actionLabel &&
        (isButton ? (
          <button
            onClick={onActionClick}
            className="md:self-start w-full md:w-fit bg-primary-500 hover:bg-primary-500/90 text-white text-sm px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            {ActionIcon && <ActionIcon size={18} />}
            {actionLabel}
          </button>
        ) : (
          <Link
            to={actionLink}
            className="md:self-start w-full md:w-fit text-primary-500 hover:text-primary-500/90 text-sm px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 cursor-pointer"
          >
            {ActionIcon && <ActionIcon size={18} className="mr-1" />}
            {actionLabel}
          </Link>
        ))}
    </div>
  );
}
