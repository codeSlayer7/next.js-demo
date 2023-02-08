import Head from "next/head";
import A from "./A";
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"bakyt test, nextjs" + keywords}></meta>
        <title>SSR check</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Main page" />
        <A href={"/users"} text="Users" />
      </div>
      <div>{children}</div>
      <style jsx>{`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}</style>
    </>
  );
};

export default MainContainer;
