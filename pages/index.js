import {
  Navbar,
  Loader,
  Footer,
  Transactions,
  Welcome,
  Services,
} from "../components/index";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default Home;
