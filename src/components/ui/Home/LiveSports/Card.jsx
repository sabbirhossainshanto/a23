import CardOne from "./CardOne";
// import CardTwo from "./CardTwo";

const Card = ({ liveSports, keys, sportsType }) => {
  
  return (
    <>
      {/* {liveSports?.[keys]?.visible && (
        <CardTwo keys={keys} liveSports={liveSports} sportsType={sportsType} />
      )} */}

      {liveSports?.[keys]?.visible && (
        <CardOne keys={keys} liveSports={liveSports} />
      )}
    </>
  );
};

export default Card;
