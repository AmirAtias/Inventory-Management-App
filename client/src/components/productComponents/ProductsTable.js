import { useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import API from "../utils/API";

const columns = [
  { field :'id',headerName:'Id',width:90 , hide: true},
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'supplierName', headerName: 'Supplier Name', width: 150 },
  { field: 'usd', headerName: 'USD',type: 'number',width: 90,},
  {field: 'ils',headerName: 'ILS', type: 'number',width: 90,},
  { field: 'quantity', headerName: 'Quantity',type:'number', width: 130 ,editable: true }
];



const ProductTable = () => {
  const [tableRows, setTableRows] = useState([]);
  
  async function updateProducts(cell){
    try{
    const response = await API.put("/updateProduct", {
          id: cell.id,
          quantity: cell.props.value
        });
      if (response.status  == 200) {
        window.alert("update success!");
      } else {
        window.alert(response.data.message);
      }
    } catch (e) {
      window.alert(`😱 Axios request failed: ${e}`);
    }
      
    }
    useEffect(() => {
        let rows = [];
        API.get(`/getAllProducts`).then((res) => {
            if (res.status === 200) {
              res.data.allProducts.forEach(product =>
                rows.push({ id:product._id,name: product.name, description: product.description,supplierName: product.supplierName, usd: product.priceUsd,ils:product.priceIls,quantity:product.quantity}))
              setTableRows(rows);  
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
    
    <div style={{ height: 400, width: '50%' , marginLeft:'22%'}}>
      <h2 style = {{color: 'black'}}>Product Table</h2>
      <h3 style = {{color: 'black'}}>click on quantity for edit !</h3>
      <DataGrid rows={tableRows} columns={columns} pageSize={10} 
      onEditCellChangeCommitted = {(cell) =>{
        updateProducts(cell)}} />
              

    </div>
  );
};
export default ProductTable;
