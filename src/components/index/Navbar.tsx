import { createSignal } from "solid-js";
import { goToSection } from "../../libs";

export default () => {
  const menus = ["Home", "About", "Menu", "Contact"];
  const [showNavMobile, setShowNavMobile] = createSignal(false);

  function toggleNavMobile() {
    setShowNavMobile(!showNavMobile());
  }

  return (
    <nav class="h-20 flex items-center justify-between sticky top-0 backdrop-blur z-40 bg-white bg-opacity-75 lg:px-32 px-6 relative">
      <div class="text-xl font-bold text-primary">RIMASAK</div>
      <ul
        class="lg:space-x-8 items-center lg:flex flex-col lg:flex-row absolute lg:relative bottom-0 trasform translate-y-full lg:translate-y-0 lg:bg-transparent bg-white rounded p-4 lg:p-0 left-0 right-0 shadow-xl lg:shadow-none scale-100 origin-top-right transition lg:scale-100"
        classList={{ "scale-0": !showNavMobile() }}
      >
        {menus.map((item) => (
          <li class="lg:mb-0 mb-3">
            <a
              class="font-semibold hover:text-green-500 transition"
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                goToSection(`#${item.toLowerCase()}`);
                toggleNavMobile();
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div class="flex items-center space-x-4 lg:hidden">
        <button onClick={toggleNavMobile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 lg:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* <button class="bg-green-500 rounded-full bg-primary h-10 w-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button> */}
      </div>
    </nav>
  );
};
