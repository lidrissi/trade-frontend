import Banner from './layout/Banner';
import LandingFooter from './layout/Footer';
import LandingHeader from './layout/header';
import Categories from './sections/Categories';
import Cta from './sections/Cta';
import DailyBestSells from './sections/DailyBestSells';
import Hero from './sections/Hero';
import HowItWorks from './sections/how-it-works';
import Sponsors from './sections/Sponsors';
import Stats from './sections/Stats';
import Stories from './sections/stories';

export default function Landing(): React.ReactElement {
  return (
    <>
      <Banner />
      <LandingHeader />
      <Hero />
      <Categories />
      <DailyBestSells />
      <Stats />
      <Stories />
      <HowItWorks />
      <Cta />
      <Sponsors />
      <LandingFooter />
    </>
  );
}
