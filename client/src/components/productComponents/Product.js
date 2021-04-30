/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import API from "../utils/API";
import { Form, Input, InputNumber, Button } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between greater then ${min}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Product = () => {
   const formCss = css({
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    width:'100%'
  });
  async function onSubmit(data) {
    console.log('data' + JSON.stringify(data));
    try {
      const response = await API.post("/product", data);
      if (response.data.validationSuccess == 'true') {
        window.alert("A new product has been created.");
        window.location.replace("/");
      } else {
        window.alert(data.message);
      }
    } catch (e) {
      window.alert(`😱 Axios request failed: ${e}`);
    }
  }
  return (
    <div css={formCss}> 
    <h1 style={{marginBottom:'0.5em',marginLeft:'1.5em',paddingTop: "0.1%",color:'black',textAlign:'center',fontSize:'4rem'}}>Add product</h1>

    <Form {...layout} name="nest-messages" onFinish={onSubmit} validateMessages={validateMessages} >
      <Form.Item
        name={['product', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['product', 'description']}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['product', 'supplierName']}
        label="Supplier Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      
      <Form.Item name={['product', 'url']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['product', 'picture']} label=" Picture url ">
        <Input />
      </Form.Item>
      <Form.Item
        name={['product', 'ils']}
        label="Price in ILS"
        rules={[
          {
            type: 'number',
            min: 0,
            required: true
            
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['product', 'usd']}
        label="Price in USD"
        rules={[
          {
            type: 'number',
            min: 0,
            required: true
            
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['product', 'quantity']}
        label=" Quantity"
        rules={[
          {
            type: 'number',
            min: 0,
            required: true
            
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset:12 }}>
        <Button type="primary" htmlType="submit" style={{marginTop:'1em'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );

}
export default Product;