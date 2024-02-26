const Spinner = () => {
  return (
    <>
      <center>
        <div className="spinner-border loader" role="status" style={{width:"7rem", height:"7rem"}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h5>Loading.........please.Wait...</h5>
      </center>
     
    </>
  );
};
export default Spinner;
