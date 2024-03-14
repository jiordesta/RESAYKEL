import React, { useState } from "react";
import CustomModal from "../components/CustomModal";

export default function Dashboard() {
  const [createProduct, setCreateProduct] = useState(true);
  return (
    <div className="relative">
      <CustomModal show={createProduct} setShow={setCreateProduct}>
        <h1>dashboard</h1>
      </CustomModal>
    </div>
  );
}
