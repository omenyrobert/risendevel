import TeamPage from '../../components/TeamPage'
import { boardTeam } from '../../data/team'
import headerImg from '../../assets/images/slide4.jpg'

export default function BoardLeadTeam() {
  return (
    <TeamPage
      title="Our International Board Lead Team"
      image={headerImg}
      intro="Our board provides strategic oversight and governance for Risen Sustainable Development, guiding our mission across every nation we serve."
      members={boardTeam}
    />
  )
}
