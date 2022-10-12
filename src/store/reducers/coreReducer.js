const initialData = {
  authenticated: false,

  pharmacy_data: {
    verification_state: "pending",
    doc_proof_of_banking_details: "",
    pharmacy_id: "",
    pharmacy_website: "",
    verified: true,
    wishlist_products: [],
    last_order_date: "",
    pharmacy_default_addr_id: "",
    total_orders: 0,
    pharmacy_name: "",
    previous_categories: [],
    pharmacy_created: "",
    cart_products: [],
  },
  user: {
    phone_number: "",
    doc_user_id: "",
    password: "",
    pharmacy_id: "",
    email: "",
    user_id: "",
    surname: "",
    user_verified: false,
    account_type: "",
    user_role: "",
    firstname: "",
    user_created: "",
  },
};

const coreReducer = (state = initialData, actions) => {
  switch (actions.type) {
    case "SET_DATA":
      return {
        ...state,
        pharmacy_data: actions.payload.pharmacy,
        user: actions.payload.user,
      };
    case "SET_AUTHENTICATED":
      return {
        ...state,
        authenticated: true,
      };
    case "SET_UNAUTHENTICATED":
      return {
        ...state,
        authenticated: false,
      };
    default:
      return state;
  }
};

export default coreReducer;
