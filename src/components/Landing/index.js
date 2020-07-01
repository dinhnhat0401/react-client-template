import React from "react";

import Layout from "../layout/index";
import Home from "./Home";
import HomeHero from "./HomeHero";

export default function Landing() {
  return (
    <Layout hero={<HomeHero />}>
      <Home />
    </Layout>
  );
}
