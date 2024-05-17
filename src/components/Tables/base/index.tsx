import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Stack } from '@mui/material';

import NoData from '@/components/NoData';
import BasePagination from '@/components/Pagination';
import { BaseTableProps } from '@/components/Tables/base/BaseTable.types';

import styles from './BaseTable.module.scss';

/**
 * @description Table template component
 * @example
 * const columns = [
 *    { key: 'id', label: 'ID', render: (value) => <Link href={`/users/${value}`}>{value}</Link> },
 *    { key: 'name', label: 'Name' },
 *    { key: 'email', label: 'Email'}
 * ];
 *
 * const data = [
 *    { id: 1, name: 'John Doe', email: 'john@doe.com' },
 *    { id: 2, name: 'Jane Doe', email: 'jane@doe.com' },
 * ];
 *
 * <BaseTable columns={columns} data={data} totalData={300} />
 **/
const BaseTable = <T,>({ columns, data, totalData, children }: BaseTableProps<T>) => {
  return (
    <Container>
      <Stack className={styles.actions}>{children}</Stack>
      {data ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell key={index} className={styles.tableHeader}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.label} component="th" scope="row">
                      {column.render ? column.render(row) : (row[column.key] as React.ReactNode)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoData />
      )}
      <Container className={styles.paginationContainer}>
        {!!totalData && <BasePagination totalData={totalData} />}
      </Container>
    </Container>
  );
};

// example usage with render
// const columns = [
//     { key: 'id', label: 'ID', render: (value) => <a href={`/users/${value}`}>{value}</a> },
//     { key: 'name', label: 'Name' },
//     { key: 'email', label: 'Email', render: (value) => <a href={`mailto
// ];

// const data = [
//     { id: 1, name: 'John Doe', email: 'john@doe.com' },
//     { id: 2, name: 'Jane Doe', email: 'jane@doe.com' },
// ];

export default BaseTable;
