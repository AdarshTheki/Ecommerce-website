const NotFound = () => {
  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ minHeight: "80vh" }}>
      <h1 className="fw-bold  text-dark " style={{fontSize:150}}>404</h1>
      <h1 className=''>Not Found</h1>
      <p className="fw-medium">
        The resource requested could not be found on this server!
      </p>
    </div>
  );
}

export default NotFound
