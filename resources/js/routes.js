import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'

const routes = [
    {
        path: '/',
        component: UserList,
        name: 'users.index',
    },
    {
        path: '/users/create',
        component: CreateUser,
        name: 'users.create',
    },
    {
        path: '/users/edit/:id',
        component: EditUser,
        name: 'users.edit',
    },
];
export default routes;
