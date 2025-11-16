import Grid from '../Grid';

export default function PartnerGrid() {
  const rows = [
  { id: 1, user: 'sourabh', partnerLegalEntity: 'Technia AB' ,agreement:'Distribution Agreement',customerEngagementModel:'CPE',role:'Sales Expert'},
  { id: 2, user: 'sachin', partnerLegalEntity: 'Technia AB' ,agreement:'Education Partner Program',customerEngagementModel:'CRE',role:'Growth marketing Program'},
  { id: 3, user: 'deeksha', partnerLegalEntity: '3d Dimension' ,agreement:'Distribution Agreement',customerEngagementModel:'CRE',role:'Cybersecurity'},
  { id: 4, user: 'sourabh1', partnerLegalEntity: 'Technia AB' ,agreement:'Distribution Agreement',customerEngagementModel:'CPE',role:'Sales Expert'},
  { id: 5, user: 'sachin1', partnerLegalEntity: 'Technia AB' ,agreement:'Education Partner Program',customerEngagementModel:'CRE',role:'Growth marketing Program'},
  { id: 6, user: 'deeksha1', partnerLegalEntity: '3d Dimension' ,agreement:'Distribution Agreement',customerEngagementModel:'CRE',role:'Cybersecurity'},
  { id: 7, user: 'sourabh2', partnerLegalEntity: 'Technia AB' ,agreement:'Distribution Agreement',customerEngagementModel:'CPE',role:'Sales Expert'},
  { id: 8, user: 'sachin2', partnerLegalEntity: 'Technia AB' ,agreement:'Education Partner Program',customerEngagementModel:'CRE',role:'Growth marketing Program'},
  { id: 9, user: 'deeksha2', partnerLegalEntity: '3d Dimension' ,agreement:'Distribution Agreement',customerEngagementModel:'CRE',role:'Cybersecurity'},
];

const columns = [
  { field: 'partnerLegalEntity', headerName: 'Partner Legal Entity', width: 300 },
  { field: 'agreement', headerName: 'Agreement', width: 200 },
  { field: 'customerEngagementModel', headerName: 'Customer Engagement Model', width: 300 },
  { field: 'role', headerName: 'Role', width: 200 },
];

  return (
    <Grid rows={rows} columns={columns}></Grid>
  );
}
