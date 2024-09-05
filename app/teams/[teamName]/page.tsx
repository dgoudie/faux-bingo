import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import styles from './page.module.css';
import { teams } from '@/app/team-data';

export default function Team({ params }: { params: { teamName: string } }) {
  const teamName = decodeURIComponent(params.teamName);

  return (
    <div className={styles.root}>
      <h1 className='title is-4'>{teamName}</h1>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={classNames(
              'box',
              styles.card,
              card.isDone && styles.isDone,
              card.isLocked && styles.isLocked
            )}
          >
            <article className='media'>
              <div className='media-left'>
                {!card.isLocked && (
                  <figure className='image is-32x32'>
                    <Image
                      src={card.imageUrl}
                      alt='Image'
                      width={32}
                      height={32}
                    />
                  </figure>
                )}
                {card.isLocked && (
                  <span
                    title='This card is not yet unlocked.'
                    className={classNames(
                      'material-symbols-outlined',
                      styles.lock
                    )}
                  >
                    lock
                  </span>
                )}
              </div>
              <div className='media-content'>
                <div className='content'>
                  <strong>{card.title}</strong>
                  <br />
                  {card.description}
                  {card.tasks.map((task) => (
                    <React.Fragment key={task.title}>
                      <hr></hr>
                      <div className='fixed-grid'>
                        <div className='grid'>
                          <div className='cell'>
                            {task.actualCount}/{task.goalCount}
                          </div>
                          {!card.isDone && !card.isLocked && (
                            <button className='button is-success is-small cell'>
                              <span className='icon is-small'>
                                <span className='material-symbols-outlined'>
                                  add
                                </span>
                              </span>
                            </button>
                          )}
                          {card.isDone && (
                            <button
                              disabled
                              className='button is-success is-small cell'
                            >
                              <span className='icon is-small'>
                                <span className='material-symbols-outlined'>
                                  check
                                </span>
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    teamName: team.name,
  }));
}

type BingoCardTaskProgress = {
  taskId: string;
  teamName: string;
};
type BingoCard = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  tasks: BingoCardTask[];
  isDone: boolean;
  isLocked: boolean;
};

type BingoCardTask = {
  title: string;
  itemGoalType: 'DROP_COUNT' | 'QUANTITY_COUNT';
  goalCount: number;
  actualCount: number;
};

const cards: BingoCard[] = [
  {
    id: 'runite ore',
    title: 'Runite Ore',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Runite_ore_detail.png/130px-Runite_ore_detail.png?7b4fd',
    description: '12x Runite Ore Drops',
    tasks: [
      {
        title: 'Runite Ore',
        itemGoalType: 'DROP_COUNT',
        goalCount: 12,
        actualCount: 12,
      },
    ],
    isDone: true,
    isLocked: false,
  },
  {
    id: 'cg',
    title: 'Corrupted Gauntlet',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Enhanced_crystal_weapon_seed_detail.png/130px-Enhanced_crystal_weapon_seed_detail.png?48996',
    description: '2x CG Unique Drops',
    tasks: [
      {
        title: 'Unique Drops',
        itemGoalType: 'DROP_COUNT',
        goalCount: 2,
        actualCount: 0,
      },
    ],
    isDone: false,
    isLocked: false,
  },
  {
    id: 'toa',
    title: 'Tombs of Amascut',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Tumeken%27s_shadow_%28uncharged%29_detail.png/180px-Tumeken%27s_shadow_%28uncharged%29_detail.png?24f11',
    description: '2x TOA Purples',
    tasks: [
      {
        title: 'Purples',
        itemGoalType: 'DROP_COUNT',
        goalCount: 2,
        actualCount: 1,
      },
    ],
    isDone: false,
    isLocked: false,
  },
  {
    id: 'elite clues',
    title: 'Elite Clue Scrolls',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Clue_scroll_%28elite%29_detail.png/150px-Clue_scroll_%28elite%29_detail.png?87067',
    description: '6x Elite Clue Drops',
    tasks: [
      {
        title: 'Drops',
        itemGoalType: 'DROP_COUNT',
        goalCount: 6,
        actualCount: 0,
      },
    ],
    isDone: false,
    isLocked: true,
  },
  {
    id: 'gwd',
    title: 'God Wars Dungeon',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Bandos_godsword_detail.png/130px-Bandos_godsword_detail.png?2250a',
    description: '3x GWD Unique Drops',
    tasks: [
      {
        title: 'Drops',
        itemGoalType: 'DROP_COUNT',
        goalCount: 3,
        actualCount: 0,
      },
    ],
    isDone: false,
    isLocked: true,
  },
  {
    id: 'revs',
    title: 'Revenants',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Revenant_ether_detail.png/120px-Revenant_ether_detail.png?41120',
    description: '2x Revenant Unique Drops',
    tasks: [
      {
        title: 'Drops',
        itemGoalType: 'DROP_COUNT',
        goalCount: 2,
        actualCount: 0,
      },
    ],
    isDone: false,
    isLocked: true,
  },
];
