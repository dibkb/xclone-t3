import Head from "next/head";
import { useState } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const { isLoading, data } = api.post.getAll.useQuery();
  const mutation = api.post.create.useMutation();
  const [input, setInput] = useState<string>("");
  function createPostHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = mutation.mutate({
      post: input,
    });
    console.log(res);
    setInput("");
  }
  return (
    <>
      <Head>
        <title>X</title>
        <meta name="Twitter (X) clone" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-y-24 flex w-full flex-col px-4 py-2 sm:max-w-xl">
        <form
          action=""
          className="flex items-center  bg-stone-800 px-4"
          onSubmit={createPostHandler}
        >
          <input
            type="text"
            className="grow rounded-md bg-transparent py-1 outline-none"
            value={input}
            placeholder="Type Something"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="rounded-md border bg-white px-4 py-0.5 text-xs text-stone-900"
            type={"submit"}
            disabled={mutation.isLoading}
          >
            Post
          </button>
        </form>
        <div className="mt-4 flex flex-col gap-2">
          {data?.map((ele) => {
            return (
              <span
                className="rounded-md border border-dotted border-stone-700 p-2"
                key={ele.author}
              >
                {ele.post}
              </span>
            );
          })}
        </div>
      </main>
    </>
  );
}
