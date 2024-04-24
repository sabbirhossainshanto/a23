import Card from "../LiveSports/Card";

const Sports = ({ sports }) => {
  return (
    <>
      {sports && Object.values(sports).length > 0
        ? Object.keys(sports)
            ?.filter((key) => {
              return sports?.[key]?.visible === true;
            })
            .sort((keyA, keyB) => sports[keyA].sort - sports[keyB].sort)
            .map((key, index) => (
              <Card key={index} keys={key} liveSports={sports} />
            ))
        : null}
    </>
  );
};

export default Sports;
