import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import DonateBanner from '../components/DonateBanner'
import aboutImg from '../assets/images/refugees.jpg'
import groupImg from '../assets/images/livelihood.jpg'

export default function AboutUs() {
  return (
    <div>
      <PageHeader title="About Us" image={aboutImg} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-brand-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">
              Risen Sustainable Development (RSD)
            </h2>
            <div className="prose-p:leading-relaxed mt-5 space-y-5 text-slate-600">
              <p>
                Risen Sustainable Development (RSD) is an agency working with youth and women
                who are from vulnerable communities. RSD is a registered charity in Uganda,
                No. 206704. This initiative started in 2014 to help communities work together
                to better respond to the needs of youth and women in vulnerable communities in
                Uganda.
              </p>
              <p>
                RSD was established to achieve stable micro businesses and quality of projects
                (group concept), increased action for youth and women, and influencing decision
                makers on policy issues affecting youth and women — empowering them through
                micro-credit loans, and nurturing the character and leadership of youth in
                schools, universities and the community.
              </p>
              <p>
                Our micro-finance approach is implemented through providing loans to women and
                youths. Women and youth form groups, and borrowing is done through the group
                with a grace period of three months before they start to pay back the loan. The
                groups are encouraged to save money and are trained in business skills on how
                to start and manage a small-scale business.
              </p>
              <p>
                Uganda has been ranked as one of the most corrupt countries in the world, with
                poor leadership. Our character development and leadership training raises men
                and women whose character is free of corruption — good citizens who love their
                country, are good stewards of resources, and are visionary. This approach is
                implemented through training, mentoring and coaching school children for one
                year, following the school calendar, with memoranda of understanding signed
                with schools and organizations that appreciate our character and leadership
                program for the youth.
              </p>
              <p>
                RSD seeks to be affiliated with an international network of agencies working
                with youth and women, with a mission of developing household income, character
                and leadership.
              </p>
            </div>

            <img
              src={groupImg}
              alt="RSD community livelihood program"
              className="mt-10 w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-xl">
              <h3 className="text-lg font-bold">At a Glance</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-300">Founded</dt>
                  <dd className="text-lg font-semibold">2014</dd>
                </div>
                <div>
                  <dt className="text-slate-300">Registration</dt>
                  <dd className="text-lg font-semibold">Registered Charity, Uganda No. 206704</dd>
                </div>
                <div>
                  <dt className="text-slate-300">Focus</dt>
                  <dd className="text-lg font-semibold">
                    Women, teenagers &amp; youth in vulnerable communities
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-300">Reach</dt>
                  <dd className="text-lg font-semibold">
                    Uganda, Burundi, DR Congo &amp; South Sudan
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100">
              <h3 className="text-lg font-bold text-brand-navy">Strategic Goal</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To contribute to the transformation of women, teenagers and youths through
                economic empowerment, leadership and character development.
              </p>
              <Link
                to="/vision-mission"
                className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-blue hover:text-brand-blue-dark"
              >
                Our Vision &amp; Mission <span aria-hidden>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <DonateBanner />
    </div>
  )
}
