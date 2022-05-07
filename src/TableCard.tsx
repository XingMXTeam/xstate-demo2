import { Table } from "@alifd/next";
const dataSource = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    });
  }
  return result;
};

const TableCard = () => {
  return (
    <Table
      dataSource={dataSource()}
      rowSelection={{
        onChange: () => {},
        columnProps: () => {
          return {
            lock: "left",
            width: 90,
            align: "center"
          };
        }
      }}
    >
      <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
      {/* <Table.Column cell={render} /> */}
    </Table>
  );
};

export default TableCard;
