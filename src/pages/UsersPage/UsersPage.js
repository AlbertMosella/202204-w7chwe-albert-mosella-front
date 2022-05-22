import UsersList from "../../components/UsersList/UsersList";

const UsersPage = ({ users }) => {
  return (
    <>
      <p>All users of Life Invader</p>
      <UsersList users={users} />
    </>
  );
};

export default UsersPage;
