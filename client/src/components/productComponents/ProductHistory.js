import { useEffect, useState,Fragment } from "react";
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import API from "../utils/API";



function Row(props) {  
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow  >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell >{row.description}</TableCell>
        <TableCell >{row.supplierName}</TableCell>
        <TableCell >{row.usd}</TableCell>
        <TableCell >{row.ils}</TableCell>
        <TableCell >{row.quantity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.creationDate}
                      </TableCell>
                      <TableCell>{historyRow.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}






export default function ProductHistory() {
    const [tableRows,setTableRows] = useState([]);
    useEffect(() => {
        let rows = [];
        API.get(`/getAllProductsWithHistory`).then((res) => {
            if (res.status === 200) {
              res.data.allProducts.forEach(product =>
                rows.push({ id:product._id,name: product.name, description: product.description,supplierName: product.supplierName, usd: product.priceUsd,ils:product.priceIls,quantity:product.quantity,history:product.productHistory}))
              setTableRows(rows);
              console.log(rows);
              
            } else {
              const error = new Error("server error");
              throw error;
            }
          })
          .catch((err) => {
            window.alert(err);
            window.location.replace("/");
          });;
    },[])
  return (
    <TableContainer component={Paper} style={{backgroundColor :'#708090'}} >
      <Table aria-label="collapsible table" style= {{width:'70%',margin:'0 auto'}} >
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Supplier Name</TableCell>
            <TableCell >USD</TableCell>
            <TableCell >ILS</TableCell>
            <TableCell >Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

