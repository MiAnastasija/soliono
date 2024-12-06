//@refresh

import HomeMain from "@/components/home/HomeMain";
import Modal from "@/elements/Modal";
import Wrapper from "@/layout/DefaultWrapper";

const Home = () => {
  return (
    <>
      <Wrapper>
        <main>
          <HomeMain />
          <Modal/>
        </main>
      </Wrapper>
    </>
  );
};

export default Home;
