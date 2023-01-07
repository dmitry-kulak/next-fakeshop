import Head from "next/head";
import Container from "@components/Container/Container";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Fakeshop</title>
        <meta name="description" content="We sell you some crap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="h-72">Banner</Container>

      <section className="flex flex-col md:flex-grow md:flex-row">
        <Container className="flex-grow-[4]">Left</Container>
        <Container className="flex-grow-[20]">Center</Container>
        <Container className="hidden flex-grow-[1] md:block">Right</Container>
      </section>
    </>
  );
};

export default Home;
