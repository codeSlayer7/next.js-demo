import { useRouter } from "next/router";
import MainContainer from "../../components/mainContainer";
export default function ({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <h1>Пользователь{query.id}</h1>
      <h2>User name {user.name}</h2>
    </MainContainer>
  );
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const user = await response.json();
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       user,
//     },
//   };
// }
export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
