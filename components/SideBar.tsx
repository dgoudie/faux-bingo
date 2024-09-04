'use client';

import classNames from 'classnames';
import { teams } from '@/app/team-data';
import { usePathname } from 'next/navigation';

export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className='menu'>
      <ul className={'menu-list'}>
        <li>
          <a href='/' className={classNames(pathname === '/' && 'is-active')}>
            Home
          </a>
        </li>
        <li>
          <a
            href='/rules'
            className={classNames(pathname === '/rules' && 'is-active')}
          >
            Rules
          </a>
        </li>
      </ul>
      <p className='menu-label'>Teams</p>
      <ul className='menu-list'>
        <li>
          {teams.map((team) => (
            <a
              href={`/teams/${team.name}`}
              key={team.name}
              className={classNames(
                pathname === `/teams/${encodeURIComponent(team.name)}` &&
                  'is-active'
              )}
            >
              {team.name}
            </a>
          ))}
        </li>
      </ul>
    </aside>
  );
}
