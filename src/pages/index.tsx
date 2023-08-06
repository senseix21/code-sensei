import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import RootLayout from '@/components/RootLayout';
import HeroBanner from '@/components/Hero';
import About from '@/components/ui/About';
import { GetStaticProps, NextPage } from 'next';
import { Project } from '@/interfaces';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CTA from '@/components/CTA';
import BlogSection from '@/components/BlogSection';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
      <HeroBanner />
      <About />
      <div className='mt-10'>
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
        <Skills />
        <CTA />
        <BlogSection />
      </div>
    </main>
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
    const res = await fetch('http://localhost:5000/projects');
    const projects = await res.json();

    // Convert the object properties into an array
    // const projects: Project[] = Object.values(data?.projects);

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

