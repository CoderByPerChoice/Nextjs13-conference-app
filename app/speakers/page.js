import Link from "next/link";

// Dynamic Data Fetching or Server Side Rendering
export async function fetchSpeakers() {
  const response = await fetch(
    "https://conferenceapi.azurewebsites.net/speakers",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const speakers = async() => {
    const data = await fetchSpeakers();
    //console.log(data.collection.items);
    return (
      <>
        <div class="w-auto font-bold h-12 flex items-center justify-center text-lg bg-black text-white opacity-70 rounded-sm">Speakers</div>
          <div class="flex flex-row flex-wrap gap-5 justify-around">
            {data.collection.items.map(
            ({ href, data, links }) => (
            <div data-aos='fade-down' data-aos-delay='100' class="flex flex-col md:flex-row items-center justify-center bg-black text-white opacity-70 rounded shadow-lg h-24 w-full md:w-1/5 my-5" key={href}>
                {data &&
                data.map(({ value }) => (
                    <Link key={value} href={`/speaker/${href.split('/')[4]}`}>
                      <div>{value}</div>
                    </Link>
                ))}
            </div>
            ))}
          </div>
      </>
    )
}

export default speakers;