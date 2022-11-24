import './App.css';
import Sidebar from './ui-lib/sidebar/sidebar';
import SidebarMobile from './ui-lib/sidebar/siderbar-mobile';
import PageWrapper from './ui/page-wrapper/page-wrapper';
import Routes from './routes';
import navigation from './utilities/navigationData';

function App() {
  return (
    <div>
      <div>
        <SidebarMobile navigation={navigation} />
        <Sidebar navigation={navigation} />
        <div className="flex flex-1 flex-col md:pl-60">
          <PageWrapper></PageWrapper>
        </div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
