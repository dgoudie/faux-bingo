import Card from '@/components/Card';
import { cards } from '@/app/cards';
import styles from './page.module.css';
import { teams } from '@/app/team-data';

export default function Team({ params }: { params: { teamName: string } }) {
  const teamName = decodeURIComponent(params.teamName);
  const team = teams.find((team) => team.name === teamName)!;
  return (
    <div className={styles.root}>
      <h1 className='title is-4'>{teamName}</h1>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} team={team} />
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
