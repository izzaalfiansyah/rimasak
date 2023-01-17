import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export default () => {
  const navigate = useNavigate();

  const [search, setSearch] = createSignal("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    navigate("/menu?q=" + search());
  }

  return (
    <div class="bg-[#e7e8de] lg:h-[500px] rounded-xl flex items-center lg:p-10 p-8 overflow-hidden relative py-20">
      <img
        src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg"
        alt=""
        class="rounded-full lg:h-[700px] lg:w-[700px] shadow-xl absolute lg:-top-[150px] lg:-right-[250px] object-cover w-[250px] h-[250px] -bottom-[100px] -right-[80px]"
      />
      <div class="lg:w-1/2 relative">
        <div class="lg:text-5xl text-2xl font-extrabold backdrop-blur">
          Be The Fastest In Delivering Your Food
        </div>
        <div class="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla
          ex culpa ab, sit doloribus impedit laboriosam. Beatae, excepturi
          quisquam aperiam voluptas necessitatibus sit dolor, numquam quibusdam
          ipsum placeat iste.
        </div>
        <div class="mt-8">
          <form class="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              class="rounded-full w-full bg-white px-5 p-3 outline-none border border-gray-50 focus:border-gray-400"
              placeholder="Search Food..."
              value={search()}
              required
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
            <button class="absolute top-3.5 right-4" type="submit">
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
          </form>
        </div>
      </div>
    </div>
  );
};
