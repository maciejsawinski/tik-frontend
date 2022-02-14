import Head from "next/head";

import Carousel from "../components/Carousel";
import styles from "../styles/Kiosk.module.css";

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kiosk</title>
        <meta httpEquiv="refresh" content="3600" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel data={data} />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    // const res = await fetch(process.env.KIOSK_ENDPOINT);
    // const data = await res.json();
    // console.log(data);
    // return { props: { data } };
    return { props: { data: { message: "hello" } } };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
