/**
 * A component to display user
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.id - The id of each user
 * @param {string} props.name - The name of each user
 * @param {string} props.email - The email of each user
 * @returns {JSX.Element} - The user view jsx
 */

type User = {
  id: string;
  name: string;
  email: string;
};

export default function User({ user }: { user: User }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
