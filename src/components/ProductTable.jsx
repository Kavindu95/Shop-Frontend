import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  SERVER_URL,
  deleteProducts,
  getProduct,
  updateProducts,
} from "../service/ApiServices";
import { Modal, message } from "antd";

import { useNavigate } from "react-router-dom";

const ProductTable = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [editItemId, setEditItemId] = useState();
  const navigate = useNavigate();

  const handleDelete = async (productId) => {
    try {
      await deleteProducts(productId);
      props.fetchProducts();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }

    // Filter out the product with the given ID
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );

    // Update the products state to remove the deleted product
    setProducts(updatedProducts);
  };

  const showModal = async (id) => {
    setIsModalOpen(true);

    try {
      const res = await getProduct(id);
      setImage(res.data.image);
      setName(res.data.name);
      setPrice(res.data.price);
      setEditItemId(res.data._id);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("file", image);
    formData.append("price", price);

    try {
      await updateProducts(editItemId, formData);

      message.success("Product update successfully");
      props.fetchProducts();
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Image</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>
                <img
                  src={`${SERVER_URL}/uploads/${product.productImage}`}
                  alt=""
                  width="50px"
                  height="50px"
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <span
                  className="m-3"
                  onClick={() => showModal(product._id)}
                  style={{ cursor: "pointer" }}
                >
                  <EditOutlined />
                </span>
                <span
                  className="m-3"
                  onClick={() => handleDelete(product._id)}
                  style={{ cursor: "pointer" }}
                >
                  <DeleteOutlined />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        title="Insert Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form>
          <div className="form-outline mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Product Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <label className="form-label">Product Name</label>
          </div>

          <div className="form-outline mb-3"> 
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>

          <div className="form-outline mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <label className="form-label">Price</label>
          </div>
        </form>
      </Modal>
      ... ...
    </div>
  );
};

export default ProductTable;
