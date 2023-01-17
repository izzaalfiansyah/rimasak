import { For, Show, createResource } from "solid-js";
import http from "../../libs/http";
import { Link } from "@solidjs/router";

export interface IngredientLine {
  category: string;
  ingredient: string;
  quantity?: number;
  unit?: string;
}

export interface Feed {
  display: {
    displayName: string;
    images: string[];
  };
  content: {
    description: {
      text: string;
    };
    details: {
      rating?: number;
      totalTime: string;
    };
    ingredientLines: Array<IngredientLine>;
    preparationSteps: Array<string>;
  };
}

export default () => {
  async function get() {
    try {
      const data = await http.get("/feeds/list", {
        params: {
          limit: 6,
          start: 0,
          tag: "list.recipe.popular",
        },
      });
      return data.data.feed;
    } catch (e) {
      return [];
    }
  }

  const [data] = createResource<Array<Feed>>(get);

  return (
    <>
      <div class="text-center mb-10">
        <span class="text-2xl font-bold">Popular Menu</span>
      </div>

      <Show when={!data.loading && !data()?.length}>
        <div class="text-center">
          <img
            src="https://img.freepik.com/free-vector/file-searching-concept-illustration_114360-437.jpg?w=740&t=st=1673965838~exp=1673966438~hmac=b6e5a4a964f1cd335bb90e04a717e8d71cb9cefc02792b6457d89ada2bc918a0"
            alt="not found image"
            class="inline lg:w-[500px]"
          />
        </div>
      </Show>

      <div class="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:px-10">
        <Show
          when={!data.loading}
          fallback={
            <>
              <For each={Array(6)}>
                {(item) => (
                  <div class="bg-gray-200 rounded-lg overflow-hidden relative animate-pulse">
                    <div class="w-full lg:h-60 h-40 object-cover" />
                    <div class="py-10"></div>
                  </div>
                )}
              </For>
            </>
          }
        >
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
                  </button>
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
                  </div> */}
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
        </Show>
      </div>
      <div class="mt-10 flex items-center justify-center">
        <Link href="/menu" class="bg-primary rounded-full p-3 px-10 text-white">
          More
        </Link>
      </div>
    </>
  );
};
