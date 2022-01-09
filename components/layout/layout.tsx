import Footer from "./footer";
import Header from "./header";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
