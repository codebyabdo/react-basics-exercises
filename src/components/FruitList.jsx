import { useState } from "react";

function FruitList() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", price: 1.5, emoji: "🍎", inCart: false },
    { id: 2, name: "Banana", price: 0.5, emoji: "🍌", inCart: false },
    { id: 3, name: "Orange", price: 0.8, emoji: "🍊", inCart: false },
    { id: 4, name: "Mango", price: 2.0, emoji: "🥭", inCart: false },
    { id: 5, name: "Pineapple", price: 3.5, emoji: "🍍", inCart: false },
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCartStatus = (id) => {
    setFruits(
      fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, inCart: !fruit.inCart } : fruit
      )
    );
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedFruits = [...fruits].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredFruits = sortedFruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = filteredFruits.reduce(
    (sum, fruit) => sum + fruit.price,
    0
  );
  const itemsInCart = filteredFruits.filter((fruit) => fruit.inCart).length;

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-dark text-white">
        <h3 className="h5 mb-0">
          <i className="fas fa-shopping-basket me-2"></i> Fruit Market
        </h3>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search fruits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Fruit{" "}
                  {sortConfig.key === "name" && (
                    <i
                      className={`fas fa-sort-${
                        sortConfig.direction === "asc" ? "up" : "down"
                      } ms-1`}
                    ></i>
                  )}
                </th>
                <th
                  className="text-end cursor-pointer"
                  onClick={() => handleSort("price")}
                >
                  Price{" "}
                  {sortConfig.key === "price" && (
                    <i
                      className={`fas fa-sort-${
                        sortConfig.direction === "asc" ? "up" : "down"
                      } ms-1`}
                    ></i>
                  )}
                </th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredFruits.length > 0 ? (
                filteredFruits.map((fruit) => (
                  <tr
                    key={fruit.id}
                    className={fruit.inCart ? "table-success" : ""}
                  >
                    <td>
                      <span className="me-2 fs-5">{fruit.emoji}</span>
                      {fruit.name}
                    </td>
                    <td className="text-end">${fruit.price.toFixed(2)}</td>
                    <td className="text-end">
                      <button
                        className={`btn btn-sm ${
                          fruit.inCart ? "btn-success" : "btn-outline-primary"
                        }`}
                        onClick={() => toggleCartStatus(fruit.id)}
                      >
                        <i
                          className={`fas ${
                            fruit.inCart ? "fa-check" : "fa-cart-plus"
                          } me-1`}
                        ></i>
                        {fruit.inCart ? "Added" : "Add"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted py-4">
                    <i className="fas fa-ban me-2"></i> No fruits found
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <strong>Total Items:</strong> {filteredFruits.length}
                </td>
                <td className="text-end">
                  <strong>Total Value:</strong> ${totalPrice.toFixed(2)}
                </td>
                <td className="text-end">
                  <span className="badge bg-primary">
                    <i className="fas fa-shopping-cart me-1"></i>
                    {itemsInCart} in cart
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FruitList;
