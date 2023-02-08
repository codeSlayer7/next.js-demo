import { useEffect, useState } from "react";
import Link from "next/link";
import MainContainer from "../components/mainContainer";
const Users = ({users}) => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "bakyt" },
//     { id: 2, name: "bakyt2" },
//   ]);


  return (
    <MainContainer>
      <h1>List of users</h1>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
};
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}

export default Users;
