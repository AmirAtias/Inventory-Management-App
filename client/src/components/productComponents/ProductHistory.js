import { useEffect, useState,Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
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

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});



function Row(props) {  
    
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
    useEffect(() => {
     
    },[])  
  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right">{row.supplierName}</TableCell>
        <TableCell align="right">{row.usd}</TableCell>
        <TableCell align="right">{row.ils}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
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
              console.log('res.data.allProducts'+JSON.stringify(res.data.allProducts))
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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Supplier Name</TableCell>
            <TableCell align="right">USD</TableCell>
            <TableCell align="right">ILS</TableCell>
            <TableCell align="right">Quantity</TableCell>
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

