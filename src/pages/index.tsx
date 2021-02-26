import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { SidebarButtons } from "../components/SidebarButtons";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CreditsProvider } from "../contexts/CreditsContext";

import styles from "../styles/pages/Home.module.css";

import Head from "next/head";
import { GetServerSideProps } from "next";

interface HomeProps {
  level: number;
  currentXp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <CreditsProvider isCreditsModalOpen={false}>
      <ChallengesProvider
        level={props.level}
        currentXp={props.currentXp}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>LEVL^ | Faça um exercício e suba de nível!</title>
          </Head>
          <strong className={styles.title}>LEVL^</strong>
          <SidebarButtons />
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </CreditsProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentXp, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentXp: Number(currentXp),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
