import { DataGrid } from '@mui/x-data-grid';

export default function Grid({rows,columns}) {
    return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid checkboxSelection disableRowSelectionOnClick rows={rows} columns={columns}  />
    </div>
  );
}
