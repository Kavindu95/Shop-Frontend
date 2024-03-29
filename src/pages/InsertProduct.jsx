import React, { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Modal, message } from "antd";
import ProductTable from "../components/ProductTable";
import { PlusOutlined } from "@ant-design/icons";
import { addProducts, getProducts } from "../service/ApiServices";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InsertProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(await res.data);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    let imageUrl = await handleUpload();

    const body = { name: name, productImage: imageUrl, price: price };

    try {
      await addProducts(body);

      message.success("Product added successfully");

      fetchProducts();
      setName("");
      setPrice("");
      setImage("");
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

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "images_preset");

    try {
      let api = `https://api.cloudinary.com/v1_1/dppihtinx/image/upload`;

      const res = await axios.post(api, formData);
      const { secure_url } = res.data;

      return secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout>
      <div className="float-end mb-3">
        <Button
          className=""
          type="primary"
          danger
          icon={<PlusOutlined />}
          size="large"
          onClick={showModal}
        >
          ADD PRODUCT
        </Button>
      </div>

      <div className="">
        <ProductTable products={products} fetchProducts={fetchProducts} />
      </div>

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
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <label className="form-label">Price</label>
          </div>
        </form>
      </Modal>
    </MainLayout>
  );
};

export default InsertProduct;
