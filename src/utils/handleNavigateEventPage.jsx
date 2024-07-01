export const handleNavigateEventPage = (data, key, navigate) => {
  navigate(`/${data?.[key]?.eventTypeId}/${key}`);
};
