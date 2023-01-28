import Link from "next/link";
import { fetchSessions } from "../../sessions/page";

export async function generateStaticParams() {
  const sessions = await fetchSessions();

  return sessions.collection.items.map(({href}) => ({
    id: href.split('/')[4],
  }));
}

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
    // Initiate both requests in parallel
    const sessionData = fetchSession(params.id);
    const topicsData = fetchTopics(params.id);

    // Wait for the promises to resolve
    const [session, topics] = await Promise.all([sessionData, topicsData]);
    //console.log(topics);

    return(
        <>
          <div class="my-5 w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Conference details</div>
          <div class="bg-black text-white opacity-70 lg:p-10 md:p-10 p-2 rounded-md my-5">
            <div class="mb-5">{session}</div>
            <hr/>
            {topics.collection.items && topics.collection.items.length > 0 && 
                <div class="mt-5 text-center lg:text-left md:text-left">Topics covered - </div>
            }
            {topics.collection.items &&
              topics.collection.items.map(({ href, data, links }) => (
                <div key={href}>
                    {data && data.map(({ value }) => (
                        <div key={value} class="text-center lg:text-left md:text-left">{value}</div>
                    ))}
                    {links &&
                    links.map(({ href }) => (
                        <Link key={href} class="underline text-center lg:text-left md:text-left" href={`/topic/${href.split('/')[4]}/sessions`}><h5>Sessions</h5></Link>
                    ))}
                </div>
              ))}
            </div>
        </>
    )
}

export default session;