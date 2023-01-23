import Link from "next/link";
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'], })


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
        <div className={poppins.className}>
        <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Conferences</div>
        {data.collection.items.map(
        ({ href, data, links }) => (
          <div class="bg-black text-white opacity-70 rounded shadow-lg" key={href}>
            {data &&
              data.map(({ name, value }) => (
                name === "Title" ?
                  <Link class="w-auto flex items-center justify-center m-5 underline" href={`/session/${href.split('/')[4]}`}> <h3 class="mt-5">{name}: {value}</h3></Link>
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
                    <Link class="w-auto flex items-center justify-center m-5 underline" href={`/speaker/${href.split('/')[4]}`}><h5>Speaker's Bio</h5></Link>
                    :
                    <Link class="w-auto flex items-center justify-center underline" href={`/session/${href.split('/')[4]}`}><h5 class="mb-5">Session's Topics</h5></Link>
                  
              ))}
          </div>
        )
      )}
      </div>
    );
}

export default Page;