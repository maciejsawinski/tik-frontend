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
    // const res = await fetch(process.env.KIOSK_ENDPOINT);
    // const data = await res.json();
    // console.log(data);
    // return { props: { data } };
    return {
      props: {
        slides: [
          {
            duration: 300000,
            name: "destinations",
          },
          {
            duration: 1000,
            name: "alerts",
          },
          {
            duration: 1000,
            name: "img",
            src: "https://w.wallhaven.cc/full/j3/wallhaven-j3rzl5.png",
          },
        ],
        alerts: {
          alerts: [
            {
              awaria_mostu: true,
              czasy_oczekiwania: {
                czas_oczekiwania: {
                  czas_do: "00:00",
                  czas_od: "00:00",
                  kierunek: "O",
                  ni: "00:00",
                  pn_pt: "00:00",
                  so: "00:00",
                },
              },
              data_likwidacji: "2022-03-14T15:00:00+0100",
              data_powstania: "2022-02-14T15:00:00+0100",
              dl: 0.2,
              droga_zamknieta: false,
              geo_lat: 51.310817,
              geo_long: 15.567714,
              km: 44.129,
              nazwa_odcinka: "węzeł Bolesławiec - Węzeł Godziszów",
              nr_drogi: "A4",
              objazd: null,
              objazd_mapy: {
                mapa: null,
              },
              ogr_nacisk: null,
              ogr_nosnosc: null,
              ogr_predkosc: null,
              ogr_skrajnia_pionowa: null,
              ogr_skrajnia_pozioma: 3.8,
              ogr_szerokosc: null,
              rodzaj: {
                poz: "U42",
              },
              ruch_2_kierunkowy: false,
              ruch_wahadlowy: false,
              skutki: null,
              sygnalizacja_swietlna: false,
              typ: "U",
              woj: "dolnośląskie",
            },
            {
              awaria_mostu: false,
              czasy_oczekiwania: {
                czas_oczekiwania: {
                  czas_do: "00:00",
                  czas_od: "00:00",
                  kierunek: "O",
                  ni: "00:00",
                  pn_pt: "00:00",
                  so: "00:00",
                },
              },
              data_likwidacji: "2022-02-17T17:00:00+0100",
              data_powstania: "2022-02-16T08:00:00+0100",
              dl: 46.295,
              droga_zamknieta: false,
              geo_lat: 51.038034,
              geo_long: 16.893331,
              km: 147.67,
              nazwa_odcinka: "w.Pietrzykowice  - w.Brzeg",
              nr_drogi: "A4",
              objazd: null,
              objazd_mapy: {
                mapa: null,
              },
              ogr_nacisk: null,
              ogr_nosnosc: null,
              ogr_predkosc: 80,
              ogr_skrajnia_pionowa: null,
              ogr_skrajnia_pozioma: null,
              ogr_szerokosc: null,
              rodzaj: {
                poz: "U33",
              },
              ruch_2_kierunkowy: false,
              ruch_wahadlowy: false,
              skutki: null,
              sygnalizacja_swietlna: false,
              typ: "U",
              woj: "dolnośląskie",
            },
            {
              czasy_oczekiwania: {
                czas_oczekiwania: {
                  czas_do: "00:00",
                  czas_od: "00:00",
                  kierunek: "O",
                  ni: "00:00",
                  pn_pt: "00:00",
                  so: "00:00",
                },
              },
              data_likwidacji: "2022-02-28T15:00:00+0100",
              data_powstania: "2022-02-04T10:00:00+0100",
              dl: 0,
              geo_lat: 51.094277,
              geo_long: 16.931535,
              km: 12.062,
              nazwa_odcinka: "Węzeł wrocław Zachód - Wroclaw Lotnisko",
              nr_drogi: "A8e",
              objazd:
                "Ograniczenie prędkosci do 80 km/h z powodu usterki dylatacji w km 12+062 na pasie prawym k/Warszawa",
              objazd_mapy: {
                mapa: null,
              },
              rodzaj: {
                poz: "I04",
              },
              skutki: "Inne",
              typ: "I",
              woj: "dolnośląskie",
            },
            {
              awaria_mostu: false,
              czasy_oczekiwania: {
                czas_oczekiwania: {
                  czas_do: "00:00",
                  czas_od: "00:00",
                  kierunek: "O",
                  ni: "00:00",
                  pn_pt: "00:00",
                  so: "00:00",
                },
              },
              data_likwidacji: "2022-03-01T15:00:00+0100",
              data_powstania: "2022-01-08T04:00:00+0100",
              dl: 0.75,
              droga_zamknieta: false,
              geo_lat: 51.118691,
              geo_long: 16.932378,
              km: 14.8,
              nazwa_odcinka:
                "Węzeł Wrocław Lotnisko - Wrocław Stadion K/Warszawa",
              nr_drogi: "A8e",
              objazd:
                "Utrudnienia zwiazane z budową ekranów akustycznych na AOW nad ul Żernicką 15+050 kierunek Warszawa zajęty pas awaryjny i prawy  prędkość ograniczona do 80 km/h",
              objazd_mapy: {
                mapa: null,
              },
              ogr_nacisk: null,
              ogr_nosnosc: null,
              ogr_predkosc: 80,
              ogr_skrajnia_pionowa: null,
              ogr_skrajnia_pozioma: null,
              ogr_szerokosc: 7,
              rodzaj: {
                poz: "U42",
              },
              ruch_2_kierunkowy: false,
              ruch_wahadlowy: false,
              skutki: null,
              sygnalizacja_swietlna: false,
              typ: "U",
              woj: "dolnośląskie",
            },
            {
              awaria_mostu: false,
              czasy_oczekiwania: {
                czas_oczekiwania: {
                  czas_do: "00:00",
                  czas_od: "00:00",
                  kierunek: "O",
                  ni: "00:00",
                  pn_pt: "00:00",
                  so: "00:00",
                },
              },
              data_likwidacji: "2022-03-01T15:00:00+0100",
              data_powstania: "2022-02-19T16:00:00+0100",
              dl: 0.4,
              droga_zamknieta: false,
              geo_lat: 51.145913,
              geo_long: 16.944172,
              km: 18,
              nazwa_odcinka: "Wrocław Stadion - Wroclaw Północ",
              nr_drogi: "A8e",
              objazd:
                "Uszkodzone bariery stalowe na pasie awaryjnym - wygrodzonoy pas awaryjny i ograniczenie prędkości do 80 - do czasu naprawy",
              objazd_mapy: {
                mapa: null,
              },
              ogr_nacisk: null,
              ogr_nosnosc: null,
              ogr_predkosc: 80,
              ogr_skrajnia_pionowa: null,
              ogr_skrajnia_pozioma: null,
              ogr_szerokosc: null,
              rodzaj: {
                poz: "U42",
              },
              ruch_2_kierunkowy: false,
              ruch_wahadlowy: false,
              skutki: null,
              sygnalizacja_swietlna: false,
              typ: "U",
              woj: "dolnośląskie",
            },
          ],
          updated: "2022-02-17T16:03:22.433Z",
        },
        destinations: [
          {
            distance: 235,
            duration: 8324,
            durationInTraffic: 8109,
            name: "Dresden (Drezno)",
            imgSrc: "https://i.imgur.com/qrhsncI.png",
          },
          {
            distance: 25,
            duration: 1778,
            durationInTraffic: 1678,
            name: "ul. Świdnicka Wrocław ",
            imgSrc: "https://i.imgur.com/1KHr1Dw.png",
          },
          {
            distance: 602,
            duration: 22112,
            durationInTraffic: 21240,
            name: "Львів (Lwów)",
            imgSrc: "https://i.imgur.com/Fs1H5VM.png",
          },
        ],
      },
    };
  } catch (error) {
    console.error(error);
  }
};

export default Home;
