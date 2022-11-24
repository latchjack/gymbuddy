import './App.css';
import Sidebar from './ui-lib/sidebar/sidebar';
import SidebarMobile from './ui-lib/sidebar/siderbar-mobile';
import PageWrapper from './ui/page-wrapper/page-wrapper';
import Routes from './routes';

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  Cog6ToothIcon,
  BoltIcon,
  TrophyIcon,
  UserIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { key: 0, name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  {
    key: 1,
    name: 'Exercises',
    href: '/exercises',
    icon: BoltIcon,
    current: false
  },
  {
    key: 2,
    name: 'Workouts',
    href: '/workouts',
    icon: FolderIcon,
    current: false
  },
  {
    key: 3,
    name: 'Progress',
    href: '/progress',
    icon: ChartBarIcon,
    current: false
  },
  {
    key: 4,
    name: 'Calendar',
    href: '/calendar',
    icon: CalendarIcon,
    current: false
  },
  { key: 5, name: 'Profile', href: '/profile', icon: UserIcon, current: false },
  {
    key: 6,
    name: 'Records',
    href: '/records',
    icon: RocketLaunchIcon,
    current: false
  },
  {
    key: 7,
    name: 'Trophies',
    href: '/trophies',
    icon: TrophyIcon,
    current: false
  },
  {
    key: 8,
    name: 'Settings',
    href: '/settings',
    icon: Cog6ToothIcon,
    current: false
  }
];

function App() {
  return (
    <div>
      <div>
        <SidebarMobile navigation={navigation} />
        {/* Static sidebar for desktop */}
        <Sidebar navigation={navigation} />
        <div className="flex flex-1 flex-col md:pl-64 border border-red-500">
          <PageWrapper></PageWrapper>
        </div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
