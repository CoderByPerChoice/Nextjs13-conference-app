import Link from "next/link";
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'], })
import { fetchTopics } from "../../../topics/page";

export async function generateStaticParams() {
  const topics = await fetchTopics();

  return topics.collection.items.map(({href}) => ({
    id: href.split('/')[4],
  }));
}

// Dynamic Data Fetching or Server Side Rendering
async function fetchTopicSessions(id) {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/topic/" + id + "/sessions",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const topicsessions = async({params}) => {
    const data = await fetchTopicSessions(params.id);
    //console.log(data);
    return (
        <div className={poppins.className}>
          <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Topic Sessions</div>
            {data.collection.items.map(
            ({ href, data, links }) => (
              <div class="bg-black text-white opacity-70 rounded shadow-lg mb-5" key={href}>
            {data &&
              data.map(({ name, value }) => (
                name === "Title" ?
                  <Link key={value} class="w-auto flex items-center justify-center m-5 underline" href={`/session/${href.split('/')[4]}`}> <h3 class="mt-5">{name}: {value}</h3></Link>
                :
                  name === "Timeslot" ?
                    <div class="w-auto flex items-center justify-center">{name}: {value}</div>
                  :
                    <>
                       <div class="w-auto flex items-center justify-center">{name}: {value}</div>
                    </>
              ))}
              {links &&
              links.map(({ rel, href }) => (
                  
                    String(rel).includes("speaker") ? 
                    <Link key={href} class="w-auto flex items-center justify-center m-5 underline" href={`/speaker/${href.split('/')[4]}`}><h5>Speaker's Bio</h5></Link>
                    :
                    <Link key={href} class="w-auto flex items-center justify-center underline" href={`/session/${href.split('/')[4]}`}><h5 class="mb-5">Session's Topics</h5></Link>
                  
              ))}
          </div>
        ))}
        </div>

    )
}

export default topicsessions;