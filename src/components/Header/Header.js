import React from "react";
import { Container, MobileButton } from "./styles";

const Header = () => {
  const [active, setActive] = React.useState(false);

  return (
    <Container>
      <MobileButton
        onClick={() => setActive(!active)}
        isActive={active}
      ></MobileButton>
    </Container>
  );
};

export default Header;
