import User from "../User/User";
import styled from "styled-components";

const UsersListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  li {
    list-style: none;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const UsersList = ({ users }) => {
  return (
    <UsersListContainer>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            <User user={user} />
          </li>
        ))}
      </ul>
    </UsersListContainer>
  );
};

export default UsersList;
