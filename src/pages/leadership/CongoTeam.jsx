import TeamPage from '../../components/TeamPage'
import { congoTeam } from '../../data/team'
import headerImg from '../../assets/images/training.jpg'

export default function CongoTeam() {
  return (
    <TeamPage
      title="Congo Team"
      image={headerImg}
      intro="Bringing finance, taxation and community development expertise to our work in DR Congo."
      members={congoTeam}
    />
  )
}
