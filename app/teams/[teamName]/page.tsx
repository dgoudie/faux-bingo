import { teams } from '@/app/team-data';

export default function Team({ params }: { params: { teamName: string } }) {
  const teamName = decodeURIComponent(params.teamName);
  return <button className='button'>{teamName}</button>;
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    teamName: team.name,
  }));
}
