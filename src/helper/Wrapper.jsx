import React from "react";

const Wrapper = ({ Component = <div>Component</div>, ...rest }) => {
  return (
    <section style={{ ...rest }}>
      <Component />
    </section>
  );
};

export default Wrapper;
