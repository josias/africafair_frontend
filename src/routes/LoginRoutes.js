import { lazy } from 'react';

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard';
import MinimalLayout from 'layout/MinimalLayout';
import NavMotion from 'layout/NavMotion';
import Loadable from 'ui-component/Loadable';

// login routing

const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication2/Login2')));
const AuthRegister = Loadable(lazy(() => import('views/pages/authentication/authentication2/Register2')));
const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/authentication2/ForgotPassword2')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: (
        <NavMotion>
            <GuestGuard>
                <MinimalLayout />
            </GuestGuard>
        </NavMotion>
    ),
    children: [
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        {
            path: '/forgot',
            element: <AuthForgotPassword />
        }
    ]
};

export default LoginRoutes;
