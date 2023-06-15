import Navigation from "../src/components/Nab";
import { Container } from "./index.style";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
