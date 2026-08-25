import TeamPage from '../../components/TeamPage'
import { internationalTeam } from '../../data/team'
import headerImg from '../../assets/images/life-skills.jpg'

export default function InternationalTeam() {
  return (
    <TeamPage
      title="International Team"
      image={headerImg}
      intro="Our global team supports RSD's administration, coordination and communications from around the world."
      members={internationalTeam}
    />
  )
}
