import Banner from './layout/Banner';
import LandingFooter from './layout/Footer';
import LandingHeader from './layout/Header';
import Categories from './sections/Categories';
import DailyBestSells from './sections/DailyBestSells';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Sponsors from './sections/Sponsors';
import Stats from './sections/Stats';
import Stories from './sections/stories';
import Why from './sections/Why';

export default function Landing(): React.ReactElement {
  return (
    <>
      <Banner />
      <LandingHeader />
      <main>
        <Hero />
        <Categories />
        <Why />
        <DailyBestSells />
        <Stats />
        <Stories />
        <HowItWorks />
        <Sponsors />
      </main>
      <LandingFooter />
    </>
  );
}
