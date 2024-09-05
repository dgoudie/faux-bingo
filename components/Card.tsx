'use client';

import React, { createRef } from 'react';

import { BingoCard } from '@/app/cards';
import Image from 'next/image';
import { Team } from '@/app/team-data';
import classNames from 'classnames';
import styles from './Card.module.css';

type CardParams = {
  card: BingoCard;
  team: Team;
};

export default function Card({ card, team }: CardParams) {
  const dialogRef = createRef<HTMLDialogElement>();
  const formRef = createRef<HTMLFormElement>();
  return (
    <div
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
              <Image src={card.imageUrl} alt='Image' width={32} height={32} />
            </figure>
          )}
          {card.isLocked && (
            <span
              title='This card is not yet unlocked.'
              className={classNames('material-symbols-outlined', styles.lock)}
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
                <div className='is-flex is-align-items-center is-justify-content-space-between'>
                  <div>
                    {task.actualCount}/{task.goalCount}
                  </div>
                  {!card.isDone && !card.isLocked && (
                    <button
                      className='button is-success is-small'
                      onClick={() => dialogRef.current?.showModal()}
                    >
                      <span className='icon is-small'>
                        <span className='material-symbols-outlined'>add</span>
                      </span>
                    </button>
                  )}
                  {card.isDone && (
                    <button disabled className='button is-success is-small'>
                      <span className='icon is-small'>
                        <span className='material-symbols-outlined'>check</span>
                      </span>
                    </button>
                  )}
                </div>
                <dialog className={styles.dialog} ref={dialogRef}>
                  <form method='dialog' ref={formRef}>
                    <div className='subtitle is-5'>
                      {card.title} {task.title}
                    </div>
                    <div className='field'>
                      <label className='label' htmlFor='url-input'>
                        Image URL
                      </label>
                      <div className='control has-icons-left'>
                        <input
                          id='url-input'
                          className='input'
                          type='url'
                          name='url'
                          placeholder='https://media.discordapp.net...'
                          required
                        />
                        <span className='icon is-small is-left'>
                          <span className='material-symbols-outlined'>
                            attach_file
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Teammate</label>
                      <div className='control has-icons-left'>
                        <div className='select'>
                          <select required name='teammate'>
                            <option value='' disabled selected>
                              Select a player...
                            </option>
                            {team.members.map((teammate) => (
                              <option value={teammate} key={teammate}>
                                {teammate}
                              </option>
                            ))}
                          </select>
                        </div>
                        <span className='icon is-left'>
                          <span className='material-symbols-outlined'>
                            person
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className='field'>
                      <p className='control is-flex is-justify-content-flex-end is-3'>
                        <button
                          type='button'
                          onClick={() => {
                            formRef.current?.reset();
                            dialogRef.current?.close();
                          }}
                          className='button'
                        >
                          <span className='icon'>
                            <span className='material-symbols-outlined'>
                              close
                            </span>
                          </span>
                          <span>Cancel</span>
                        </button>
                        <button
                          type='submit'
                          className='button is-primary ml-3'
                        >
                          <span className='icon'>
                            <span className='material-symbols-outlined'>
                              save
                            </span>
                          </span>
                          <span>Save</span>
                        </button>
                      </p>
                    </div>
                  </form>
                </dialog>
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
