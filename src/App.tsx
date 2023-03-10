import { Admin, Resource } from "react-admin";
import { UserList } from "./pages/users";
import { OrganizationsList, OrganizationsEdit, OrganizationCreate } from "./pages/organizations";
import { Dashboard } from './components/Dashboard'
import OrganizationsIcon from "@mui/icons-material/CorporateFare";
import UserIcon from "@mui/icons-material/Group";

import { authProvider } from "./providers/authProvider";
import { dataProvider } from './providers/dataProvider'


const App = () => (
   <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}  >
      <Resource name="organizations" list={OrganizationsList} create={OrganizationCreate} edit={OrganizationsEdit} icon={OrganizationsIcon} />
      <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
   </Admin>
  );
export default App;