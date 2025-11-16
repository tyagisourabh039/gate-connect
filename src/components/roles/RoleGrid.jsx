import Grid from '../Grid';

export default function RoleGrid() {
  const rows = [
  { id: 1, role: 'Client Executive' ,agreement:'Distribution Agreement',customerEngagementModel:'CPE',primaryRole:'Sales'},
  ];

const columns = [
  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'agreement', headerName: 'Agreement', width: 200 },
  { field: 'customerEngagementModel', headerName: 'Customer Engagement Model', width: 300 },
  { field: 'primaryRole', headerName: 'PrimaryRole', width: 200 },
];

  return (
 <Grid rows={rows} columns={columns}></Grid>
  );
}
