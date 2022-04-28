import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Carousel from "../components/Carousel";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>kiosk</title>
        <meta httpEquiv="refresh" content="3600" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        height="100vh"
        width="100vw"
        bgGradient="linear(to-r, #A100FFFF, #71C4FFFF)"
      >
        <Carousel {...props} />
      </Flex>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(process.env.KIOSK_ENDPOINT);
    const data = await res.json();
    return {
      props: {
        slides: data.kiosk.slides,
        alerts: data.alerts.alerts,
        destinations: data.destinations.destinations,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
