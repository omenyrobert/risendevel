import PageHeader from '../components/PageHeader'
import DonateBanner from '../components/DonateBanner'
import headerImg from '../assets/images/life-skills.jpg'
import img1 from '../assets/images/life-skills-2.jpg'
import img2 from '../assets/images/training.jpg'
import img3 from '../assets/images/coffee1.png'
import img4 from '../assets/images/skills3.jpg'

const posts = [
  {
    title: 'Sow a Thought, Reap a Destiny',
    image: img1,
    tag: 'Character',
    excerpt:
      'Depending on what we are, our habits will make us or break us. We become what we repeatedly do — a reflection on how small, daily choices shape the leaders we become.',
    body: "As writer Samuel Smiles put it: \"Sow a thought, and you reap an act; sow an act, and you reap a habit; sow a habit, and you reap a character; sow a character, reap a destiny.\" Character isn't built in a single dramatic moment — it's built in the quiet, repeated choices nobody else sees. Every training, every mentoring session, every act of integrity is a seed. What we sow today in our homes, schools and communities is the destiny we are cultivating for tomorrow's leaders.",
  },
  {
    title: 'From Survival to Thriving',
    image: img2,
    tag: 'Leadership',
    excerpt:
      'Religion points us to miracles, but Jesus points us to change — a reminder that true leadership is about transformation, not performance.',
    body: 'Real leadership development is never just about skills — it is about a change of heart that moves people from merely surviving to truly thriving. When we walk with communities in Uganda, Burundi, DR Congo and South Sudan, our goal is not to hand out programs, but to walk alongside people as they discover their own capacity to lead, to change, and to dominate the good works set before them.',
  },
  {
    title: 'Good Stewards of What Is Entrusted to Us',
    image: img3,
    tag: 'Stewardship',
    excerpt:
      'Every loan repaid, every shilling saved, and every resource shared is an act of stewardship that multiplies hope in the next family.',
    body: 'Our micro-credit groups meet weekly not just to repay loans, but to hold one another accountable — trusting each other with their savings, their businesses, and their futures. That same spirit of stewardship shapes how we handle every resource entrusted to Risen Sustainable Development, from donor gifts to the land set aside for our medical centre. Good stewardship is simply love, made practical.',
  },
  {
    title: 'A Seed of Hope for Every Child',
    image: img4,
    tag: 'Mentorship',
    excerpt:
      'Behind every scholar-student is a widow, a grandmother, or a family believing that education can rewrite a story.',
    body: "Many of the children we walk with are being raised by grandmothers and widows who carry the weight of a household alone. A scholarship is never just tuition — it is a vote of confidence in a child's future. Through mentorship and our L.E.G.I.T Camps, we remind every scholar-student that they can achieve far beyond their circumstances.",
  },
]

export default function EdifyCorner() {
  return (
    <div>
      <PageHeader title="Edify Corner" image={headerImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Reflections to Encourage &amp; Build You Up
          </h2>
          <p className="mt-3 text-slate-500">
            A corner of encouragement drawn from the stories, values and Christ-centred
            approach that shape everything we do at Risen Sustainable Development.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100"
            >
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-7">
                <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {post.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-navy">{post.title}</h3>
                <p className="mt-2 text-sm italic text-slate-500">{post.excerpt}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{post.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
