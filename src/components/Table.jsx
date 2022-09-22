import { Table } from "antd";
import React, { useEffect, useState } from "react";

function UserTable() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [setUser]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name < b.name,
      key: "name",
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
    },
    {
        title: "Street",
        dataIndex: ["address","street"],
        key: "street",
      },
  ];
  return (
    <Table
      style={{
        width: "70%",
        margin: "0 auto",
        marginTop: "50px"
      }}
      dataSource={user}
      columns={columns}
    />
  );
}

export default UserTable;
