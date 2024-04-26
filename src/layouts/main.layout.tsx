import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <>
      <header className="sticky top-0 text-4xl border-b border-cyan-800 mb-8 dark:bg-zinc-900 z-10 py-4">
        <Link to="/">
          <span className="font-extrabold text-cyan-800">MARVEL</span>
          <span className="font-extralight">DATA</span>
        </Link>
      </header>
      <Outlet />
    </>
  );
}
