import Header from "./Home/Header";

export default function Layout({ children }) {
   
  
    return (
      <div className=" max-w-[1536px] flex justify-center flex-col px-5 md:px-10 ">
          <Header />
    <div>{children}</div>

      </div>
    );
  }