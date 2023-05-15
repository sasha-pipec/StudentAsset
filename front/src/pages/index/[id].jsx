import { useRouter } from "next/router";
import React from "react";
import store from "../../store/store";
const CatPage = () => {
  const { query } = useRouter();
  console.log(query.id, store.user.first_name);
  return <div>CatPage</div>;
};

export default CatPage;
