import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";


const Home = () => {
  return (
    <main>
      <h1 className="text-4xl underline">Popular Companions</h1>

        <section className="home-section">
          <CompanionCard
              id="123"
              name="Neura the Brainy Explorer"
              topic="Neural Networks of the Brain"
              subject="science"
              duration={45}
              color="#ffda6e"
          />
          <CompanionCard
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivatives and Integrals"
              subject="maths"
              duration={30}
              color="#efd0ff"
          />
          <CompanionCard
              id="789"
              name="Verba the Vocabulary Builder"
              topic="English Literature"
              subject="language"
              duration={30}
              color="#bde7ff"
          />
        </section>

        <section className="home-section">
          <CompanionsList/>
          <CTA/>
        </section>
    </main>
  )
}

export default Home