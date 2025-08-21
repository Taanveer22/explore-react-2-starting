const SingleProduct = (props) => {
  console.log(props);
  const { data, index } = props;
  console.log(data);
  console.log(index);

  return (
    <div>
      <div className="card bg-primary text-primary-content h-full w-full">
        <div className="card-body h-52">
          <h2 className="card-title">{data.title.slice(0, 16)}</h2>
          <p className="text-justify text-sm">
            {data.description.slice(0, 150)}
          </p>
          <div className="card-actions justify-center">
            <button className="btn">{data.category}</button>
            <button className="btn">{data.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
