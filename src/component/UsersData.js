const UsersData = ({ user }) => {
  return (
    <>
      {user.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address.city}</td>
          </tr>
        );
      })}
    </>
  );
};
export default UsersData;
