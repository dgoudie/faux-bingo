import classNames from 'classnames';
import styles from './page.module.css';
import { teams } from '@/app/team-data';

export default function Home() {
  return (
    <div className={styles.root}>
      {teams.map((team) => (
        <a
          className={classNames('button', styles.button)}
          href={`/teams/${team.name}`}
          key={team.name}
        >
          <h1 className='title is-4'>{team.name}</h1>
          <div className={styles.buttonProgress}>
            <span
              className={classNames('subtitle is-6', styles.buttonProgressText)}
            >
              {team.points}/50
            </span>
            <progress
              className='progress is-primary'
              value={team.points}
              max='50'
            ></progress>
          </div>
        </a>
      ))}
    </div>
  );
}
