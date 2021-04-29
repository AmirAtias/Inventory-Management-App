/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import API from "../utils/API";

const Product = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  async function onSubmit(data) {
    try {
      const response = await API.post("/product", data);
      if (response.data.validationSuccess == 'true') {
        window.location.replace("/");
      } else {
        window.alert(data.message);
      }
    } catch (e) {
      window.alert(`😱 Axios request failed: ${e}`);
    }
  }

  const formCss = css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "0px",
  });
  const labelForm = css({
    width: "75px",
    fontFamily: "'Baloo 2', cursive",
    fontSize: "1vw",
    margin: "0px",
  });
  const inputCss = css({
    width: "100%",
    padding: "8px 20px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "2px",
  });
  const containerCss = css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  });
  return (
    <Container css={containerCss}>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit(onSubmit)} css={formCss}>
        <div>
       
          <label css={labelForm} htmlFor="name">
            Name:
          </label>
          {errors.name && <p> *name is required.</p>}
          <input 
            
            css={inputCss}
            name="name"
            placeholder="enter proudct name"
            {...register("name",{ required: true })}
            
          />
           
        </div>
        <div>
          <label css={labelForm} htmlFor="description">
          Description:
          </label>
          <input
            css={inputCss}
            name="description"
            placeholder="enter proudct description"
            {...register("description")}
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="supplierName">
          Supplier Name:
          </label>
          <input
            css={inputCss}
            name="supplierName"
            placeholder="enter supplier Name"
            {...register("supplierName")}
            
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="ils">
          Price in ILS:
          </label>
          <input
            type="number"
            css={inputCss}
            name="ils"
            placeholder="enter price in ILS"
            {...register("ils")}
            
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="usd">
          Price in USD:
          </label>
          <input
            type="number"
            css={inputCss}
            name="usd"
            placeholder="enter price in USD"
            {...register("usd")}
            
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="url">
            Url:
          </label>
          <input
            css={inputCss}
            name="url"
            placeholder="enter prouduct url "
            {...register("url")}
            
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="picture">
            Picture:
          </label>
          <input
            css={inputCss}
            name="url"
            placeholder="enter picture url of the proudct "
            {...register("picture")}
            
          />
        </div>
        <div>
          <label css={labelForm} htmlFor="quantity">
          Quantity:
          </label>
          <input
            type="number"
            css={inputCss}
            name="quantity"
            placeholder="enter the quantity of the proudct"
            {...register("quantity")}
            
          />
        </div>
        <Button css={labelForm} type="submit" variant="primary" size="lg">
          Submit
        </Button>{" "}
      </form>
    </Container>
  );
}
export default Product;