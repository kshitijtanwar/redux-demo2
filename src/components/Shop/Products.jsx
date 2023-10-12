import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: "i1",
        title: "Book",
        price: 5,
        description: "A book from amazon",
    },
    {
        id: "21",
        title: "Pen",
        price: 3,
        description: "Parker Pen",
    },
];
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((item) => {
                    return (
                        <ProductItem
                        key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default Products;
