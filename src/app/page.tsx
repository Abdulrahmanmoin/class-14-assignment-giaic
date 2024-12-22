import Link from "next/link";

interface ItemInterface {
  userId: number,
  id: number,
  title: string,
  body: string
}

export default async function Home() {

  const url = await fetch("https://jsonplaceholder.typicode.com/posts")
  // console.log("url: ", url);
  const res = await url.json()
  console.log("res: ", res);

  return (
    <>
      {res.map((item: ItemInterface, index: number) =>
          <div key={index} className="p-5  bg-pink-600">
            <Link href={`/${item.id}`} >
              <p className="p-5  bg-blue-900 w-32">
                Post No: {item.id}
              </p>
              <br />
              <p className="p-5  bg-blue-900 w-[40rem]">
                Title:  {item.title}
              </p>
            </Link>
          </div>
      )}
    </>
  );
}