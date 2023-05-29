/**
 * A page to statically generate user list
 *
 * @page
 * @param {Object} props - The page props
 * @param {string} props.users - The list of fetched users through getStaticProps
 * @returns {JSX.Element} - The user list jsx
 *
 * At build time getStaticProps will be ran and it will fetch users and html is rendered on the
 * server side and cached to the cdn in production and in development with every user request
 * build is done
 */

import User from "@/components/user";

type User = {
  id: string;
  name: string;
  email: string;
};

interface Props {
  users: User[] | Array<User>;
}

export default function Users(props: Props) {
  const { users } = props;
  return (
    <div>
      Users List
      {users.map((item) => (
        <User key={item.id} user={item} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
