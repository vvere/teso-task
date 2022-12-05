import { useEffect, useState } from 'react';
import { DataTable } from 'components/molecules';
import { fetchServerList } from 'api';
import { useAppDispatch, useAppSelector } from 'store/types';
import { setError, setLoading, setServers } from 'store/serverSlice';
import { ActivityIndicator } from 'components/atoms';
import colors from 'themes/colors';

const ServerList = () => {
  const { servers, error, loading } = useAppSelector(state => state.server);
  const [sortedBy, setSorted] = useState({ sortedBy: '', order: '' });

  const dispatch = useAppDispatch();

  const sortData = (type: 'distance' | 'name') => {
    const isSame = type === sortedBy.sortedBy;

    const order = isSame ? (sortedBy.order === 'desc' ? 'asc' : 'desc') : 'asc';

    if (order === 'asc') {
      const sortedArray = [...servers].sort((a, b) =>
        type === 'distance' ? a.distance - b.distance : a.name.localeCompare(b.name)
      );

      dispatch(setServers(sortedArray));
    } else {
      const reversSortedArray = [...servers].sort((a, b) =>
        type === 'distance' ? b.distance - a.distance : b.name.localeCompare(a.name)
      );

      dispatch(setServers(reversSortedArray));
    }

    setSorted({ sortedBy: type, order });
  };

  useEffect(() => {
    dispatch(setLoading(true));
    fetchServerList()
      .then(({ data }) => {
        dispatch(setError(null));
        dispatch(setServers(data));
      })
      .catch(err => dispatch(setError(err?.message || 'Request failed')))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title title="Servers" onClick={() => sortData('name')} />
        <DataTable.Title title="Distance" onClick={() => sortData('distance')} />
      </DataTable.Header>
      {loading && <ActivityIndicator />}
      {error && <DataTable.Item color={colors.red} text={error} />}
      {servers.map(({ distance, name }) => (
        <DataTable.Row key={`${name}-${distance}`}>
          <DataTable.Item text={name} />
          <DataTable.Item text={distance} />
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default ServerList;
