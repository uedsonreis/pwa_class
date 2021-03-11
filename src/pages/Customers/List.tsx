import { GridColumns, GridRowParams } from '@material-ui/data-grid';
import { IconButton } from '@material-ui/core';
import { RemoveCircle } from '@material-ui/icons';

import List from '../../components/List';
import { Customer } from '../../types';

type Props = { customers: Customer[], clickOnRow: (param: GridRowParams) => void };

export default function CustomerList({ customers, clickOnRow }: Props) {

    const columns: GridColumns = [
        { field: 'id', hide: true },
        { field: 'name', headerName: 'Name', width: 322 },
        { field: 'email', headerName: 'E-mail', width: 323 },
    ];

    return (
        <List columns={columns} rows={customers} clickOnRow={clickOnRow} />
    );
}