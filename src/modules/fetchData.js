const fetchData = (src, setError, setIsLoaded, setData) => {
  fetch(src)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setData(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
};

export default fetchData;
