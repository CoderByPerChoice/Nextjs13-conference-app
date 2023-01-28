import Link from "next/link";
import { fetchSpeakers } from "../../speakers/page";

export async function generateStaticParams() {
  const speakers = await fetchSpeakers();

  return speakers.collection.items.map(({href}) => ({
    id: href.split('/')[4],
  }));
}

// Dynamic Data Fetching or Server Side Rendering
async function fetchSpeaker(id) {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/speaker/" + id,
    { cache: "no-store" }
  );

  const data = await response.text();
  return data;
}

async function fetchSpeakerSessions(id) {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/speaker/" + id + "/sessions",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const Page = async({params}) => {
    const data = await fetchSpeaker(params.id);
    const sessions = await fetchSpeakerSessions(params.id);

    return(
        <>
            <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Speaker's BIO</div>
            <div class="bg-black text-white opacity-70 p-10 rounded-md my-5">
            <div class="mb-5">{data}</div>
            <hr/>
            <div class="mt-5">Sessions conducted - </div>
            {sessions.collection.items.map(
            ({ href, data }) => (
              <div key={href}>
                {data &&
                  data.map(({ name, value }) => (
                    name === "Title" ?
                      <Link key={value} class="underline" href={`/session/${href.split('/')[4]}`}> <h3>{name}: {value}</h3></Link>
                    :
                      <></>
                  ))}
              </div>
            ))}
            </div>
        </>
    )
}

export default Page;