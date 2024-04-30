import Card from "../LiveSports/Card";

const Sports = ({ sports }) => {
  const filterSports =
    sports &&
    Object.keys(sports)?.filter((key) => {
      return sports?.[key]?.visible === true;
    });

  if (filterSports?.length === 0) {
    return (
      <div className="profile-menu-box">
        <div className="card-blank">
          <span> No events available right now</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {sports && Object.values(sports).length > 0
        ? filterSports
            ?.sort((keyA, keyB) => sports[keyA].sort - sports[keyB].sort)
            .map((key, index) => {
              return <Card key={index} keys={key} liveSports={sports} />;
            })
        : null}
    </>
  );
};

export default Sports;
