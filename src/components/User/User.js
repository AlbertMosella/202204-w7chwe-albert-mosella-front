import styled from "styled-components";

const UserContainer = styled.div`
  text-align: center;
  color: black;
  width: 250px;
  height: 470px;
  margin: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 1px 5px 15px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  outline: 2px solid black;
  outline-offset: 8px;
  &:hover {
    transform: scale(1.04);
  }
  img {
    width: 250px;
    border-radius: 20px 20px 0px 0px;
  }
  h2 {
    font-size: 1.5em;
    margin: 10px 10px;
    color: white;
  }
  p {
    font-size: 1.35em;
    margin: 8px 8px;
  }
  .user-name {
    background-color: rgba(50, 50, 50, 0.7);
  }
`;

const User = ({ user }) => {
  return (
    <UserContainer>
      <img src="" alt="" />
      <div className="user-name">
        <h2>{user.username}</h2>
      </div>
      <p>Name: {user.name}</p>
      <p>Friends: {user.friends}</p>
      <p>Enemies: {user.enemies}</p>
    </UserContainer>
  );
};

export default User;
