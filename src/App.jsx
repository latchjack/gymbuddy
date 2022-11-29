import './App.css';
import Sidebar from './ui-lib/sidebar/sidebar';
import SidebarMobile from './ui-lib/sidebar/siderbar-mobile';
import PageWrapper from './ui/page-wrapper/page-wrapper';
import Routes from './routes';
import navigation from './utilities/navigationData';
import { useRoute } from 'wouter';

function App() {
    const [match, params] = useRoute('/login');

    console.log(match, params);
    return (
        <div>
            <div>
                {!match && <SidebarMobile navigation={navigation} />}
                {!match && <Sidebar navigation={navigation} />}
                <div className="flex flex-1 flex-col md:pl-60">
                    <PageWrapper></PageWrapper>
                </div>
            </div>
            <Routes />
        </div>
    );
}

export default App;
