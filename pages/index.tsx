import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import SectionHeader from "../components/SectionHeader";
import getTitle from "../lib/getTitle";

const elements = [
  {
    title: "About me",
    content: `<p>
        I'm a full-stack web developer from Poland. I like trying out new technologies and innovations,
        learning different programming languages brings me joy. I work mainly in React, Go, Python and 
        Rust, majority of my work is directed towards backend development. When I'm not programming web apps,
        I like to tinker with Arduinos or Raspberry Pis, I'm also learning 3D modelling.
      </p>`,
  },
  {
    title: "My previous work",
    content: `My portfolio consists of:
      <ul>
        <li><a href='https://hadro.de' target="_blank">hadro.de</a> auto-parts ecommerce site,</li>
        <li><a href="http://twh-tex.herokuapp.com" target="_blank">TEX</a> Polish-English learning app,</li>
        <li><a href="https://converse-lime.vercel.app" target="_blank">Converse.</a> localized number system conversion app,</li>
        <li><a href="https://gator-mu.vercel.app" target="_blank">Gator</a> localized interactive app for learning about the purpose of logic gates,</li>
        <li>much more side-projects that aren't hosted anymore.</li>
      </ul>`,
  },
  {
    title: "My goal",
    content: `<p>
        Since I'm still in school, I'd like to gain as much experience now, when I still have a lot of free time. 
        If you have a project, business or platform idea contact me at <a href = 'mailto:me@terawatthour.dev'>me@terawatthour.dev</a>
        and I'll put your thoughts into life.</p>`,
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <div className="border-b pb-8 -mb-3">
        <header className="text-3xl font-medium tracking-wide mb-1">
          TeraWattHour
        </header>
        <span className="tracking-wide">Electrifying full-stack.</span>
      </div>
      {elements.map((x, i) => (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 * i + 0.8 }}
          key={i}
          className="mt-12"
        >
          <SectionHeader>{x.title}</SectionHeader>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: x.content }}
          ></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;
