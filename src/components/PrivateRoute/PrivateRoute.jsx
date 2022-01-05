import { Redirect, Route } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
  // TODO: Use the user in context to determine whether to redirect to /login
  const { user } = useUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        //object is truthy, so ask for a property (you'd expect for success) value within the object
        user.id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
