import React from "react";

const Header = (props) => {
  const { navigate } = props;

  const LinkNav = () => {
    navigate("/");
  };

  return (
    <div>
      <label htmlFor="banner"> 문화 성향 테스트</label>
      <input
        type="button"
        onClick={LinkNav}
        name="문화성향 테스트"
        id="banner"
      />
    </div>
  );
};

export default Header;
