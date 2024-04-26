import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

type Props = {
  type: 'next' | 'prev';
  action: () => void;
};

export function Button({ type, action }: Props) {
  let className = 'bg-cyan-800 h-14 w-14 flex justify-center items-center hover:bg-cyan-900';

  if (type === 'prev') className += ' mr-4';
  if (type === 'next') className += ' ml-4';

  return (
    <button
      type="button"
      className={className}
      onClick={action}
    >
      {type === 'prev' ? <MinusIcon className="w-6" /> : <PlusIcon className="w-6" />}
    </button>
  );
}
