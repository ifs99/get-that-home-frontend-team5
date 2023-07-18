import styled from "@emotion/styled";

const AppLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return <AppLayout>{children}</AppLayout>;
}

export default Layout;
