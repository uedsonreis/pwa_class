import { DataGrid, GridColumns, GridRowParams } from '@material-ui/data-grid';

type Props = { columns: GridColumns, rows: any[], clickOnRow?: (param: GridRowParams) => void };

export default function CustomeList({ columns, rows, clickOnRow }: Props) {

    return (
        <div style={{ height: 480, width: '100%' }}>
            <DataGrid
                rows={rows} columns={columns}
                onRowClick={clickOnRow}
                pageSize={10}
            />
        </div>
    );
}