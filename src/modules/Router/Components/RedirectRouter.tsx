interface PropsI {
  children: React.ReactNode;
}
//KEEP this component as a wrapper for the routes that need to be redirected to the new path. It will be used in the Router component to wrap the routes that need to be redirected.
//This comes useful when we perform AUTH roadmap tasks
const RedirectRouter = (props: PropsI) => {
  const { children } = props;

  return <>{children}</>;
};

export { RedirectRouter };
