import React, { useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS, COLOR } from "../../utils/styles";
import { v4 as uuidv4 } from "uuid";

const ProductImageSection = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <StyledProductImageSection className="d-flex flex-column flex-md-row">
      <div className="d-flex col-12 col-md-3 order-1 flex-md-column order-md-0">
        {product.images.map((image) => {
          return (
            <div
              className="small-image mb-2 m-1"
              key={uuidv4()}
              onClick={() => {
                setMainImage(image);
              }}
            >
              <img src={image} alt={product.name} />
            </div>
          );
        })}
      </div>

      <div className="col-12 col-md-9 mb-3 ">
        <img className="main-image" src={mainImage} alt={product.name} />
      </div>
    </StyledProductImageSection>
  );
};

const StyledProductImageSection = styled.section`
  .small-image {
    cursor: pointer;
    border: 1px solid ${COLOR.nude};
    @media (max-width: ${BREAKPOINTS.md}px) {
      width: 33%;
    }
  }
  .main-image {
    border: 1px solid ${COLOR.nude};
  }
`;

export default ProductImageSection;
