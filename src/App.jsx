import React from "react";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import InterviewBanner from "./component/InterviewBanner";
import JobCategories from "./component/JobCategories";
import TopCompanies from "./component/TopCompanies";
import FeaturedCompanies from "./component/FeaturedCompanies";
import CampusPlatform from "./component/CampusPlatform";
import PopularJobs from "./component/PopularJobs";
import UpcomingEvents from "./component/UpcomingEvents";
import InterviewQuestions from "./component/InterviewQuestions";
import PremiumServices from "./component/PremiumServices";
import VideoProfile from "./component/VideoProfile";
import Footer from "./component/Footer";
import Chatbot from "./component/Chatbot";

// Array of renderable components
const contentComponents = [
  HeroSection,
  InterviewBanner,
  JobCategories,
  TopCompanies,
  FeaturedCompanies,
  CampusPlatform,
  PopularJobs,
  UpcomingEvents,
  InterviewQuestions,
  PremiumServices,
  VideoProfile,
];

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Static Components */}
      <Header />

      {/* Render all sections dynamically */}
      {contentComponents.map((Component, index) => (
        <Component key={index} />
      ))}

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
