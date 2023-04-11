import React from "react";
import Button from "react-bootstrap/Button";
import { useStateValue } from "../context/StateProvider";



const Product = () => {
  // const products = [
  //   {
  //     id: 135833465,
  //     title: "Golden Aroana",
  //     href: "/",
  //     imageSrc:
  //       "https://media.istockphoto.com/id/1126678802/photo/gold-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=NvhkP-maVycYniI7shUNSNGyif3c85zDBjgB43SD1Xk=",
  //     imageAlt: "Golden Aroana.",
  //     price: "$35",
  //     color: "Golden",
  //   },
  //   {
  //     id: 2536856568,
  //     title: "Silver Aroana",
  //     href: "/",
  //     imageSrc:
  //       "https://media.istockphoto.com/id/1349096095/photo/beautiful-fish-arowana-or-asian-bonytongue-arowana-science-name-is-scleropages-formosus.jpg?b=1&s=170667a&w=0&k=20&c=r6_rBhFaHj3kwj5JiZB1TQV-5JcAwQL6Fkm-8w_3MjE=",
  //     imageAlt: "Silver Aroana",
  //     price: "$35",
  //     color: "Silver",
  //   },
  //   {
  //     id: 3356783568356,
  //     title: "Red Aroana",
  //     href: "/",
  //     imageSrc:
  //       "https://media.istockphoto.com/id/1306548074/photo/red-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=weQYvByYHsWWeY8zyxiTbeMjLpphPdCOmVU_A3NWCfM=",
  //     imageAlt: "Red Aroana",
  //     price: "$35",
  //     color: "Red",
  //   },
  //   {
  //     id: 4536856,
  //     title: "Jaguar Discus",
  //     href: "/",
  //     imageSrc:
  //       "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg",
  //     imageAlt: "Jaguar Discus",
  //     price: "$35",
  //     color: "Jaguar Orange on White",
  //   },
  //   {
  //     id: 536785368,
  //     title: "Bluesh Discus",
  //     href: "/",
  //     imageSrc:
  //       "https://cdn.pixabay.com/photo/2015/08/26/18/15/fish-908863__340.jpg",
  //     imageAlt: "Bluesh Discus",
  //     price: "$35",
  //     color: "Bluesh",
  //   },
  //   {
  //     id: 23645674576,
  //     title: "Jaguar Discus",
  //     href: "/",
  //     imageSrc:
  //       "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg",
  //     imageAlt: "Jaguar Discus",
  //     price: "$35",
  //     color: "Jaguar Orange on White",
  //   },
  //   {
  //     id: 73652,
  //     title: "Red Aroana",
  //     href: "/",
  //     imageSrc:
  //       "https://media.istockphoto.com/id/1306548074/photo/red-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=weQYvByYHsWWeY8zyxiTbeMjLpphPdCOmVU_A3NWCfM=",
  //     imageAlt: "Red Aroana",
  //     price: "$35",
  //     color: "Red",
  //   },
  
  //   // More products...
  // ];
  
// HAVING PRODUCTS FROM THE CONTEXT
  const [{ products } , dispatch] = useStateValue();

  const addToCart = (product) => {
    // Add items to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        href: product.href ,
        imageSrc: product.imageSrc,
        imageAlt: product.imageAlt,
        price: product.price,
        color: product.color,
      },
    });
  };
  return (
    <div>
      <div className="mx-auto py-2 max-w-8xl px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div>
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <Button
                    variant="warning"
                    className="w-100 border border-solid"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
