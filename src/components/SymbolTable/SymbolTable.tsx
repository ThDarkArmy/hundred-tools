import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const SymbolTable =(props: any)=> {
    const { rows, columns, onCopyClick } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{width: {lg: "700px", md: "700px"}}} aria-label="simple table">
        <TableHead sx={{bgcolor: "silver"}}>
          <TableRow>
            {columns.map((column: any)=>  <TableCell align='center'>{column}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.description}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, '&:hover': {bgcolor: "silver"} }}
            >
              <TableCell align="center" sx={{fontSize: "26px"}}>{row.symbol}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"><Button onClick={()=> onCopyClick(row.symbol)}>Copy</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SymbolTable;
