import { DataTable } from '../../molecules';

const data = [
  { id: 1, server: 'Lul', distance: '132' },
  { id: 2, server: 'Cul', distance: '32' },
  { id: 3, server: 'Aul', distance: '232' },
  { id: 4, server: 'Wul', distance: '2' },
  { id: 5, server: 'Zul', distance: '1' },
];

const ServerListPage = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title title="Servers" />
        <DataTable.Title title="Distance" />
      </DataTable.Header>
      {data.map(({ distance, id, server }) => (
        <DataTable.Row key={id}>
          <DataTable.Item text={server} />
          <DataTable.Item text={`${distance}`} />
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default ServerListPage;
