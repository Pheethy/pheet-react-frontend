import './AppHeader.css';

function AppHeader() {
    return(
        <header className="app-header">
          <div>
          <a href="#" className="mainTextHeader">Raidho Slowbar</a>
          <a href="#" className="textHeader">Product</a>
          <a href="#" className="textHeader">Coffee Beans</a>
          <a href="#" className="textHeader">About Us</a>
          </div>
          <div>
          <a href="#" className="textHeader">Log-in</a>
          </div>
        </header>
    );
}

export default AppHeader;