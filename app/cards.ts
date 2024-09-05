type BingoCardTaskProgress = {
  taskId: string;
  teamName: string;
};
export type BingoCard = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  tasks: BingoCardTask[];
  isDone: boolean;
  isLocked: boolean;
};

export type BingoCardTask = {
  title: string;
  itemGoalType: 'DROP_COUNT' | 'QUANTITY_COUNT';
  goalCount: number;
  actualCount: number;
};

export const cards: BingoCard[] = [
  {
    id: 'runite ore',
    title: 'Runite Ore',
    imageUrl:
      'https://oldschool.runescape.wiki/images/thumb/Runite_ore_detail.png/130px-Runite_ore_detail.png?7b4fd',
    description: '12x Runite Ore Drops',
    tasks: [
      {
        title: 'Drops',
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
        title: 'Unique Drops',
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
        title: 'Unique Drops',
        itemGoalType: 'DROP_COUNT',
        goalCount: 2,
        actualCount: 0,
      },
    ],
    isDone: false,
    isLocked: true,
  },
];
