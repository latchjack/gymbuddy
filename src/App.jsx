import './App.css';
import Sidebar from './ui-lib/sidebar/sidebar';
import SidebarMobile from './ui-lib/sidebar/sidebar-mobile';
import PageWrapper from './ui/page-wrapper/page-wrapper';
import Routes from './routes';
import navigation from './utilities/navigationData';
import { useRoute } from 'wouter';
import { AuthContextProvider } from './context/auth-context';
import { AccessTokenProvider } from './context/access-token-context';

function App() {
    const [match, params] = useRoute('/login');

    console.log(match, params);
    return (
        <div>
            <AuthContextProvider>
                <AccessTokenProvider>
                    <div>
                        {!match && <SidebarMobile navigation={navigation} />}
                        {!match && <Sidebar navigation={navigation} />}
                        <div className="flex flex-1 flex-col md:pl-60">
                            <PageWrapper></PageWrapper>
                        </div>
                    </div>
                    <Routes />
                </AccessTokenProvider>
            </AuthContextProvider>
        </div>
    );
}

export default App;
