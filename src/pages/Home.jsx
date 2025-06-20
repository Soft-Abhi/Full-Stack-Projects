import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products"; // Mock electronics data

const Home = () => {
  const heroBg = "https://images.unsplash.com/photo-1510552776732-41a7b1a69f2d?auto=format&fit=crop&w=2000&q=80";

  return (
    <div>

      {/* Hero Section */}
      <div
        className="bg-dark text-light d-flex align-items-center"
        style={{
          background: `url(${heroBg}) center/cover no-repeat`,
          height: "75vh",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="display-3 fw-bold">Techno Store</h1>
          <p className="lead">
            Latest Electronics at Your Fingertips
          </p>
          <Link to="/products" className="btn btn-lg btn-primary mt-3">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Product Preview Section */}
      <div className="container py-5">
        <h2 className="mb-4 text-center">Featured Electronics</h2>
        <div className="row">
          {products.slice(0, 4).map((prod) => (
            <div className="col-md-3 mb-4" key={prod.id}>
              <div className="card h-100">
                <img
                  src={prod.image}
                  className="card-img-top"
                  alt={prod.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text text-muted">₹{prod.price}</p>
                  <Link
                    to={`/products/${prod.id}`}
                    className="mt-auto btn btn-outline-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
