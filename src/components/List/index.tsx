import { DataGrid, GridColumns, GridRowParams } from '@material-ui/data-grid';

type Props = { columns: GridColumns, rows: any[], clickOnRow?: (param: GridRowParams) => void };

export default function CustomeList({ columns, rows, clickOnRow }: Props) {

    const height = rows.length * 60 + 130;

    return (
        <div style={{ width: '100%', height }}>
            <DataGrid
                rows={rows} columns={columns}
                onRowClick={clickOnRow}
                pageSize={10}
            />
        </div>
    );
}