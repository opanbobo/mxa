import propTypes from 'prop-types';

const Error = ({ statusCode }) => {
  return (
    <>
      <div className="container">
        <h1>{statusCode}</h1>
      </div>
      
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

Error.propTypes = {
  statusCode: propTypes.oneOfType([propTypes.number, propTypes.object])
    .isRequired,
};

export default Error;
