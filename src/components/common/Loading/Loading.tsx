import { ClockIcon } from '@heroicons/react/24/outline';

export function Loading() {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <ClockIcon className="w-6 mr-2 animate-pulse text-cyan-600" />
        <p className="text-2xl uppercase">Cargando</p>
        <ClockIcon className="w-6 ml-2 animate-pulse text-cyan-600" />
      </div>
    </>
  );
}
