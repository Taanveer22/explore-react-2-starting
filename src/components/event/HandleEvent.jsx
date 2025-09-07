const HandleEvent = () => {
  const handleHeroAlom = (message) => {
    alert(message);
  };
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-medium">handle event in react</h3>
      <button
        onClick={() => handleHeroAlom("hi from hero alom")}
        className="btn btn-info"
      >
        btn for hero alom
      </button>
    </div>
  );
};

export default HandleEvent;
