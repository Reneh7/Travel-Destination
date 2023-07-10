import "./Tours.css";

function Tours(props) {
  return (
    <>
        <div className="card">
          <p>Name: {props.name}</p>
          <img src={props.image} className="card-img-top" alt={props.name} />
        </div>
    </>
  );
}

export default Tours;
