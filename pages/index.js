import Head from "next/head";

import Carousel from "../components/Carousel";

const Home = ({ slides }) => {
  return (
    <div>
      <Head>
        <title>kiosk</title>
        <meta httpEquiv="refresh" content="3600" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel slides={slides} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    // const res = await fetch(process.env.KIOSK_ENDPOINT);
    // const data = await res.json();
    // console.log(data);
    // return { props: { data } };
    return {
      props: {
        slides: [
          {
            duration: 1000,
            name: "alerts",
          },
          {
            duration: 3000,
            name: "destinations",
          },
          {
            duration: 3000,
            name: "img",
            src: "https://w.wallhaven.cc/full/j3/wallhaven-j3rzl5.png",
          },
        ],
        updated: "2022-02-11T17:19:35.867Z",
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
