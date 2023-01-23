// Dynamic Data Fetching or Server Side Rendering
async function fetchSpeakersLocal() {
  const response = await fetch(
    "http://localhost:3000/api/hello",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const spearker = async() => {
    const data = await fetchSpeakersLocal();
    //console.log(data);
    return(
        <>
            <h1>Speaker Bio</h1>
            {/* {data.sessions.map(
                <h3>{data.title}</h3>
            )} */}
        </>
    )
}

export default spearker;