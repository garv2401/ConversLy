import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
// {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";


const Home = async() => {
  const companions=await getAllCompanions({limit:3});
  const recentSessionCompanions=await getRecentSessions(10);
  //console.log("recent companions:",recentSessionCompanions);


  return (
    <main>
      <h1 className="text-4xl underline">Popular Companions</h1>

        <section className="home-section">
          {
            companions.map((companion)=>{
              return(
                  <CompanionCard
                      key={companion.id}
                      {...companion}
                      color={getSubjectColor(companion.subject)}
                  />
              )
            })
          }




        </section>

        <section className="home-section">
          <CompanionsList
              title="Recently completed sessions"
              companions={recentSessionCompanions}
              classNames={"w-2/3 max-lg:w-full"}
          />
          <CTA/>
        </section>
    </main>
  )
}

export default Home