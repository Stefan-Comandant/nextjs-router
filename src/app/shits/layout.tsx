import React from "react";

interface Props {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}

const ComplexLayout = ({ children, notifications, revenue, login }: Props): JSX.Element => {
  const isLoggedin: boolean = true;

  return isLoggedin ? (
    <>
      <div>Complex Layout</div>
      <h1>Notifications:</h1>
      <div>{notifications}</div>
      <h1>Revenue:</h1>
      <div>{revenue}</div>
      <h1>Children:</h1>
      <div>{children}</div>
    </>
  ) : (
    <>
      <h1>Login</h1>
      <div>{login}</div>
    </>
  );
};

export default ComplexLayout;
