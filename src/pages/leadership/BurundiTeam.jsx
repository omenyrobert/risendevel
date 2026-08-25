import TeamPage from '../../components/TeamPage'
import { burundiTeam } from '../../data/team'
import headerImg from '../../assets/images/refugees.jpg'

export default function BurundiTeam() {
  return (
    <TeamPage
      title="Burundi Team"
      image={headerImg}
      intro="Extending our mission of community development and character formation into Burundi."
      members={burundiTeam}
    />
  )
}
