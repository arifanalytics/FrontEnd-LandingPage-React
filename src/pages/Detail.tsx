import React from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Detail: React.FC = () => {
  let { id } = useParams();

  return (
    <>
      <div>Detail</div>
    </>
  );
};

export default Detail;
