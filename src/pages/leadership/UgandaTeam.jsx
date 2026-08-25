import TeamPage from '../../components/TeamPage'
import { ugandaTeam } from '../../data/team'
import headerImg from '../../assets/images/skills2.jpg'

export default function UgandaTeam() {
  return (
    <TeamPage
      title="Ugandan Team"
      image={headerImg}
      intro="Our Uganda-based team leads day-to-day programs, operations and partnerships across the communities we serve."
      members={ugandaTeam}
    />
  )
}
