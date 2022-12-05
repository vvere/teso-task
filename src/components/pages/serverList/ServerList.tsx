import { useEffect } from 'react';
import { DataTable } from 'components/molecules';
import { fetchServerList } from 'api';
import { useAppDispatch, useAppSelector } from 'store/types';
import { setError, setLoading, setServers } from 'store/serverSlice';
import { ActivityIndicator } from 'components/atoms';
import colors from 'themes/colors';

const ServerList = () => {
  const { servers, error, loading } = useAppSelector(state => state.server);

  const dispatch = useAppDispatch();

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

  console.log({ error, loading });

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title title="Servers" />
        <DataTable.Title title="Distance" />
      </DataTable.Header>
      {loading && <ActivityIndicator />}
      {error && <DataTable.Item color={colors.red} text={error} />}
      {servers.map(({ distance, name }) => (
        <DataTable.Row key={name}>
          <DataTable.Item text={name} />
          <DataTable.Item text={distance} />
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default ServerList;
