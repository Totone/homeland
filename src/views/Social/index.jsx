import React from "react";
import Layout from "../../components/Layout";

const Social = () => {
  return (
    <Layout>
      <h2>Où me trouver</h2>
      <ul>
        <li>
          Twitter
        </li>
        <li>
          Github
        </li>
        <li>
          LinkedIn
        </li>
        <li>
          Malt
        </li>
        <li>StackOverflow</li>
      </ul>
    </Layout>
  );
};

export default React.memo(Social);
