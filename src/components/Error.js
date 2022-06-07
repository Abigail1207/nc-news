const Error = ({ errorMsg }) => {
  if (!errorMsg) return <h1>Oops it's an error</h1>;
  return <h1>{errorMsg}</h1>;
};

export default Error;
