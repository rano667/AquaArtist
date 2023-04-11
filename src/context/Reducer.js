export const initialState = {
    products: [
        {
          id: 135833465,
          title: "Golden Aroana",
          href: "/",
          imageSrc:
            "https://media.istockphoto.com/id/1126678802/photo/gold-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=NvhkP-maVycYniI7shUNSNGyif3c85zDBjgB43SD1Xk=",
          imageAlt: "Golden Aroana.",
          price: "$35",
          color: "Golden",
        },
        {
          id: 2536856568,
          title: "Silver Aroana",
          href: "/",
          imageSrc:
            "https://media.istockphoto.com/id/1349096095/photo/beautiful-fish-arowana-or-asian-bonytongue-arowana-science-name-is-scleropages-formosus.jpg?b=1&s=170667a&w=0&k=20&c=r6_rBhFaHj3kwj5JiZB1TQV-5JcAwQL6Fkm-8w_3MjE=",
          imageAlt: "Silver Aroana",
          price: "$35",
          color: "Silver",
        },
        {
          id: 3356783568356,
          title: "Red Aroana",
          href: "/",
          imageSrc:
            "https://media.istockphoto.com/id/1306548074/photo/red-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=weQYvByYHsWWeY8zyxiTbeMjLpphPdCOmVU_A3NWCfM=",
          imageAlt: "Red Aroana",
          price: "$35",
          color: "Red",
        },
        {
          id: 4536856,
          title: "Jaguar Discus",
          href: "/",
          imageSrc:
            "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg",
          imageAlt: "Jaguar Discus",
          price: "$35",
          color: "Jaguar Orange on White",
        },
        {
          id: 536785368,
          title: "Bluesh Discus",
          href: "/",
          imageSrc:
            "https://cdn.pixabay.com/photo/2015/08/26/18/15/fish-908863__340.jpg",
          imageAlt: "Bluesh Discus",
          price: "$35",
          color: "Bluesh",
        },
        {
          id: 23645674576,
          title: "Jaguar Discus",
          href: "/",
          imageSrc:
            "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg",
          imageAlt: "Jaguar Discus",
          price: "$35",
          color: "Jaguar Orange on White",
        },
        {
          id: 73652,
          title: "Red Aroana",
          href: "/",
          imageSrc:
            "https://media.istockphoto.com/id/1306548074/photo/red-arowana-fish.jpg?b=1&s=170667a&w=0&k=20&c=weQYvByYHsWWeY8zyxiTbeMjLpphPdCOmVU_A3NWCfM=",
          imageAlt: "Red Aroana",
          price: "$35",
          color: "Red",
        },
      
        // More products...
      ],
    basket: [],
    user: null,
};

const Reducer = (state, action) => {
    console.log(action);
    // console.log(state);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding items into basket
            return {
                ...state,
                basket: [...state.basket, action.item]
                
            };
            
        case 'REMOVE_FROM_BASKET':
            // logic for removing items from basket
            return {state};
            
        default:
            return {state};
    }
}
export default Reducer;
