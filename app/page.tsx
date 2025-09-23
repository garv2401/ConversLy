import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import RecentSessionCompanionList from "@/components/RecentSessionCompanionsList";
import PopularCompanions from "@/components/PopularCompanions";



const Home = async() => {
  const companions=await getAllCompanions({limit:5});
  const recentSessionCompanions=await getRecentSessions(10);
  //console.log("companions:",companions);


  return (
    <main>
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