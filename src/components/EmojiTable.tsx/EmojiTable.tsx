import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const EmojiTable =(props: any)=> {
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
              <TableCell component="th" scope="row">
                <img height="30px" width="30px" src={row.imgSrc} alt=""/>
              </TableCell>
              <TableCell align="center" sx={{fontSize: "26px"}}>{row.emoji}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"><Button onClick={()=> onCopyClick(row.emoji)}>Copy</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmojiTable;
