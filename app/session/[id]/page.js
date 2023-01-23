import Link from "next/link";

// Dynamic Data Fetching or Server Side Rendering
async function fetchSession(id) {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/session/" + id,
    { cache: "no-store" }
  );

  const data = await response.text();
  return data;
}

async function fetchTopics(id) {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/session/" + id + "/topics",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const session = async({params}) => {
    const data = await fetchSession(params.id);
    const topics = await fetchTopics(params.id);
    //console.log(topics);

    return(
        <>
          <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Conference details</div>
          <div class="bg-black text-white opacity-70 p-10 rounded-md my-5">
            <div class="mb-5">{data}</div>
            <hr/>
            {topics.collection.items && topics.collection.items.length > 0 && 
                <div class="mt-5">Topics covered - </div>
            }
            {topics.collection.items &&
              topics.collection.items.map(({ href, data, links }) => (
                <div key={href}>
                    {data && data.map(({ value }) => (
                        <h5>{value}</h5>
                    ))}
                    {links &&
                    links.map(({ href }) => (
                        <Link class="underline" href={`/topic/${href.split('/')[4]}/sessions`}><h5>Topic's Sessions</h5></Link>
                    ))}
                </div>
              ))}
            </div>
        </>
    )
}

export default session;