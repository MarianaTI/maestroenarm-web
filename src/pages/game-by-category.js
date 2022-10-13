const categories = [
  {
    name: "Medicina Interna",
    subcategories: [
      { name: "Gastroenterologia" },
      { name: "Nefrologia" },
      { name: "Dermatologia" },
    ],
  },
];

const GameByCategory = () => {
  return (
    <section>
      <div className="categories">
        {categories.map((item) => (
          <div key={item.name} className="category">
            <span>{item.name}</span>
            <div className="subcategories">
              {item.subcategories.map((item) => (
                <div key={item.name} className="subcategory">
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameByCategory;
