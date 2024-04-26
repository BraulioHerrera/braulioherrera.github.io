import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

type Props = {
  message?: string;
  showLink?: boolean;
};

export function ErrorPage({
  message = 'Lo sentimos, parece que hay un error',
  showLink = true,
}: Props) {
  return (
    <div className={`${styles.ErrorPageContainer}`}>
      <div className={`${styles.ErrorMessage}`}>
        <div className="flex items-center justify-center">
          <ExclamationTriangleIcon className="w-6 mt-1 mr-2 animate-pulse text-cyan-600" />
          <h1 className="text-2xl">ERROR</h1>
          <ExclamationTriangleIcon className="w-6 mt-1 ml-2 animate-pulse text-cyan-600" />
        </div>
        <hr className="border-cyan-800 my-4" />
        <p className="font-mono">{message}</p>
        {showLink && (
          <Link to="/" className="text-cyan-400 hover:underline">
            Home
          </Link>
        )}
      </div>
    </div>
  );
}
