import { Admin, Resource } from "react-admin";
import { UserList } from "./pages/users";
import { PostList, PostEdit, PostCreate } from "./pages/posts";
import { Dashboard } from './components/Dashboard'
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

import { authProvider } from "./providers/authProvider";
import { dataProvider } from './providers/dataProvider'


const App = () => (
   <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}  >
      <Resource name="organizations" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
      <Resource name="users" list={UserList} recordRepresentation="name" icon={UserIcon} />
   </Admin>
  );
export default App;