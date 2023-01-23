import Link from "next/link";

// Dynamic Data Fetching or Server Side Rendering
async function fetchSessions() {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/sessions",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const conffeedback = () => {
  return (
    <h1>Feedback</h1>
  )
}

const Page = async() => {
    const data = await fetchSessions();
    //console.log(data);
    return(
        <>
        <h1>Conferences</h1>
        {data.collection.items.map(
        ({ href, data, links }) => (
          <div key={href}>
            {data &&
              data.map(({ name, value }) => (
                name === "Title" ?
                  <Link href={`/session/${href.split('/')[4]}`}> <h3>{name}: {value}</h3></Link>
                :
                  name === "Timeslot" ?
                    <h5>{name}: {value}</h5>
                  :
                    <>
                       <h4>{name}: {value}</h4>
                    </>
              ))}
              {links &&
              links.map(({ rel, href }) => (
                  
                    String(rel).includes("speaker") ? 
                    <Link href={`/speaker/${href.split('/')[4]}`}><h5>Speaker's Bio</h5></Link>
                    :
                    <Link href={`/session/${href.split('/')[4]}`}><h5>Session's Topics</h5></Link>
                  
              ))}
              <hr/>
          </div>
        )
      )}
      </>
    );
}

export default Page;