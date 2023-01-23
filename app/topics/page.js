import Link from "next/link";

// Dynamic Data Fetching or Server Side Rendering
async function fetchTopics() {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/topics/",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const Topics = async() => {
    const data = await fetchTopics();
    return (
        <>
            <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Topics</div>
            <div class="flex flex-row flex-wrap gap-5 justify-around">
            {data.collection.items.map(
            ({ href, data, links }) => (
            <div class="flex flex-col items-center justify-center bg-black text-white opacity-70 rounded shadow-lg h-24 w-1/5 my-5" key={href}>
                {data &&
                data.map(({ value }) => (
                    <div key={value}>{value}</div>
                ))}
                {links &&
                links.map(({ href }) => (
                    <Link key={href} class="underline mt-2" href={`/topic/${href.split('/')[4]}/sessions`}><div>Sessions</div></Link>
                ))}
            </div>
            ))}
            </div>
        </>
    )
}

export default Topics;