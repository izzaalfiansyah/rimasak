import {
  For,
  Show,
  createResource,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import http from "../libs/http";
import { Feed } from "../components/index/MenuPopuler";
import { Link, useSearchParams } from "@solidjs/router";

const MenuPage = () => {
  const limit = 12;
  const [start, setStart] = createSignal(0);
  const [searchParams, setSearchParams] = useSearchParams<any>();

  const [data, { mutate, refetch }] = createResource<Array<Feed>, any>(
    () => ({ start: start(), q: searchParams.q }),
    get
  );

  async function get({ start, q }: any) {
    try {
      if (q) {
        const res = await http.get("/feeds/search", {
          params: {
            start: 0,
            maxResult: 30,
            q: q,
          },
        });

        return res.data.feed;
      } else {
        const res = await http.get("/feeds/list", {
          params: {
            limit: limit,
            start: start,
          },
        });

        return data()
          ? [...(data() as Array<any>), ...res.data.feed]
          : res.data.feed;
      }
    } catch (e) {
      return [];
    }
  }

  onMount(() => {
    document.addEventListener("scroll", (e) => {
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;

      if (!data.loading && !searchParams.q) {
        if (scrollHeight < clientHeight + scrollTop + 10) {
          setStart((val) => val + limit);
        }
      }
    });
  });

  onCleanup(() => {
    document.removeEventListener("scroll", () => {});
  });

  return (
    <div class="bg-white leading-normal tracking-normal text-sm px-6 lg:px-20 pb-10">
      <button
        class="fixed bottom-10 right-10 bg-white rounded-full ring-1 ring-opacity-[5%] ring-black shadow-lg h-14 w-14 flex items-center justify-center z-30"
        onClick={() => window.scrollTo(0, 0)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      </button>
      <div class="h-20 flex items-center justify-center sticky top-0 backdrop-blur z-40 bg-white bg-opacity-75 lg:px-32 px-6 relative mb-6">
        <Link
          href="/"
          class="absolute top-5 lg:left-5 left-0 h-10 w-10 rounded-full border border-primary text-primary flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </Link>
        <div class="text-center text-2xl font-bold">Menu List</div>
      </div>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        doloribus perspiciatis fugit commodi veniam iste reprehenderit
        voluptatum eos iusto, a blanditiis harum maxime fugiat illo consectetur
        consequatur quisquam repellat eveniet?
      </p>

      <div class="pb-10"></div>

      <div class="lg:px-20">
        <div class="relative">
          <div class="absolute top-4 right-6 flex space-x-3">
            {/* <button
              type="button"
              onClick={() => setSearchParams({ q: "" })}
              classList={{ hidden: !searchParams.q }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            class="w-full border border-gray-200 rounded-full px-8 p-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
            value={searchParams.q || ""}
            onChange={(e) => {
              mutate([]);
              setSearchParams({ q: e.currentTarget.value });
            }}
            placeholder="Search Food..."
          />
        </div>
      </div>

      <div class="pb-10"></div>

      <Show when={!data.loading && !data()?.length}>
        <div class="text-center">
          <img
            src="https://img.freepik.com/free-vector/file-searching-concept-illustration_114360-437.jpg?w=740&t=st=1673965838~exp=1673966438~hmac=b6e5a4a964f1cd335bb90e04a717e8d71cb9cefc02792b6457d89ada2bc918a0"
            alt="not found image"
            class="inline lg:w-[500px]"
          />
        </div>
      </Show>

      <Show when={searchParams.q && !data.loading}>
        <div class="mb-6 text-lg font-semibold lg:px-10">
          Showing {data()?.length || 0} data from search "{searchParams.q}"
        </div>
      </Show>

      <div class="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:px-10">
        <For each={data()}>
          {(item) => (
            <div class="bg-gray-100 rounded-lg overflow-hidden relative flex flex-col">
              <div class="absolute top-2 left-2 flex space-x-2 items-center">
                {/* <button class="bg-white rounded-full h-9 w-9 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button> */}
                <div class="bg-white h-9 rounded-full px-3 flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 text-yellow-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="font-semibold">
                    {item.content.details?.rating || "-"}
                  </span>
                </div>
              </div>
              <img
                src={item.display.images[0]}
                class="w-full lg:h-60 h-40 object-cover"
                alt=""
              />
              <div class="p-4 flex flex-col grow">
                <div
                  class="lg:text-xl font-semibold overflow-hidden grow"
                  style={{
                    display: "-webkit-box",
                    "-webkit-line-clamp": 2,
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {item.display.displayName}
                </div>
                <div class="mt-4 text-right">
                  <button class="rounded-full px-5 p-2 border border-primary text-primary hover:bg-primary hover:text-white transition">
                    Make Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </For>
        <Show when={data.loading} fallback={<></>}>
          <For each={Array(6)}>
            {(item) => (
              <div class="bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
                <div class="w-full lg:h-60 h-40 object-cover" />
                <div class="py-10"></div>
              </div>
            )}
          </For>
        </Show>
      </div>
    </div>
  );
};

export default MenuPage;
