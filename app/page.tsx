import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import RecentSessionCompanionList from "@/components/RecentSessionCompanionsList";
import PopularCompanions from "@/components/PopularCompanions";
import Image from "next/image";
import Link from "next/link";



const Home = async() => {
  const companions=await getAllCompanions({limit:5});
  const recentSessionCompanions=await getRecentSessions(10);
  //console.log("companions:",companions);


  return (
    <main>

        <div className="home-section flex flex-col md:flex-row justify-between items-center px-6 py-12">
            {/* Text Section */}
            <div className="max-w-lg text-center md:text-left space-y-6">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent drop-shadow-md">
                    Your Smart AI Companion
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed">
                    Discover a personalized companion that listens, learns, and grows with you.
                    Conversly helps you chat, explore, and achieve more — anytime, anywhere.
                </p>

                <Link  href='/subscription'>
                    <button className="mt-4 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/40 hover:scale-105 transition-transform">
                        Get Started
                    </button>
                </Link>
            </div>

            {/* Image Section */}
            <div className="mt-10 md:mt-0">
                <Image
                    className="rounded-xl shadow-[0_10px_30px_rgba(147,51,234,0.6)] hover:scale-105 transition-transform duration-500"
                    src="/images/HeroImage-Conversly.png"
                    alt="Hero Image"
                    height={480}
                    width={480}
                />
            </div>
        </div>



        <div className="flex justify-center py-1">
        <h1 className="text-4xl font-bold text-purple-400 drop-shadow-md">
          Popular Companions
        </h1>
      </div>

      {/*Hidden on md to lg*/}
        <section className="home-section lg:hidden">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}
        </section>

      {/* Desktop (md and above) */}
      <div className="hidden lg:block">
        <PopularCompanions companions={companions} />
      </div>


      <section className="home-section">
          <RecentSessionCompanionList
              title="Recently Completed Sessions"
              recent={recentSessionCompanions}
              classNames="w-2/3 max-lg:w-full"
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Home