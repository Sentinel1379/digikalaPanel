
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./css/main.css";
import Header from "./(HomeComponent)/Header/page";
import SideBar from "./(HomeComponent)/SideBar/page";
import Help from "./(HomeComponent)/Help/page";
import MobileFooter from "./(HomeComponent)/MobileFooter/page";
import { MenuContextProvider } from "./ContextProvider";

export const metadata = {
  title: "فروشگاه اینترنتی دیجی کالا",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <MenuContextProvider>
          <Header />
          <div className="main">
            <div className="main-container row">
              <SideBar />
              {children}

            </div>
            <Help/>
          </div>
          <div className="Mob-main">
            
            {children}
            <MobileFooter/>
          </div>
        </MenuContextProvider>


        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
      </body>
    </html>
  );
}
