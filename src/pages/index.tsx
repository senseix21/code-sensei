import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import RootLayout from '@/components/RootLayout';
import HeroBanner from '@/components/Hero';
import About from '@/components/About';
import { GetStaticProps, NextPage } from 'next';
import { Project } from '@/interfaces';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import BlogSection from '@/components/BlogSection';
import Head from 'next/head';

export const meta = {
  title: 'CODE-SENSEI | FullStack Software Developer',
  description: "Welcome to SENSEI's Portfolio. I am a passionate Fullstack dev  with expertise in TS,JS,NODE,Express,Mongoose,Postgre, React, Redux, Postgre etc. Explore my diverse collection of projects showcasing my creativity and problem-solving abilities. From web development to design, my portfolio demonstrates my dedication to delivering exceptional digital experiences. Get inspired and contact me for collaborations and opportunities",
  keywords: 'portfolio, Full Stack Developer, projects, web development,code-sensei, codesensei',
  author: 'SENSEI aka Mehedi Hasan',
};

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        {/* Add other required meta tags if needed */}
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
        <div id='home'>
          <HeroBanner />
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='projects'>
          <div className='mt-10' >
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="text-3xl font-bold title-font mb-4 text-accent-content">
                <span className='text-accent'>🚀 Beyond the Stratosphere: <br /></span>Projects that Reach New Heights(hopefully) 🌌

              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Embark on a journey beyond the stratosphere! Together, we'll launch projects that soar to new heights,
                leaving a lasting impact on the digital landscape.
              </p>
            </div>
            <Projects projects={projects} />
          </div>

          <div id='skills'>
            <Skills />
          </div>

          <div id='contact'>
            <CTA />
          </div>

          <div id='blog'>
            <BlogSection />
          </div>
        </div>
      </main>
    </div>
  );
};

(Home as any).getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
};

export default Home;

// Implement getStaticProps to fetch the data during build time
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    // Replace with the JSON data file path or API endpoint
    // const res = await fetch('http://localhost:5000/projects');
    const res = await fetch('https://code-sensei-backend.vercel.app/projects');
    const projects = await res.json();

    // Return the fetched data as props
    return {
      props: {
        projects,
      },
    };

  } catch (error) {
    // Handle any errors that might occur during the data fetching process
    console.error('Error fetching data:', error);
    return {
      props: {
        projects: [], // Return an empty array or default value to avoid errors
      },
    };
  }
};

