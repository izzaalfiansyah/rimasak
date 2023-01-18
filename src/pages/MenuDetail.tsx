import { Accessor, For, createSignal } from "solid-js";
import Feed from "../interfaces/Feed";

interface Props {
  show: [Accessor<boolean>, Function];
  menu?: Feed;
}

function MenuDetailPage(props: Props) {
  const [show, setShow] = props.show;
  const [selectedImage, setSelectedImage] = createSignal(0);

  return (
    <>
      <div
        class="bg-white h-screen fixed bottom-0 left-0 right-0 z-50 transition transform lg:px-20 p-8 overflow-y-auto"
        classList={{ "translate-y-full": !show() }}
      >
        <button
          class="absolute top-5 right-5 outline-none"
          onClick={() => setShow(false)}
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
        </button>

        <div class="text-center text-xl font-semibold">
          {props.menu?.display.displayName}
        </div>
        <div class="py-4"></div>
        <div class="bg-primary bg-opacity-50 rounded-lg p-5 shadow">
          <div class="flex justify-center items-center">
            <img
              src={props.menu?.display?.images[selectedImage()]}
              alt={props.menu?.display?.displayName}
              class="rounded max-w-full lg:h-[400px] h-[200px] object-cover"
            />
          </div>
        </div>
        <div class="mb-4"></div>
        <div class="flex flex-wrap -mx-3 justify-center">
          <For each={props.menu?.display?.images}>
            {(item, index) => (
              <div class="overflow-hidden w-20 h-20 mx-1.5 rounded">
                <img
                  src={item}
                  alt=""
                  class="w-full h-full cursor-pointer rounded object-cover transition transform hover:scale-[110%]"
                  onClick={() => setSelectedImage(index)}
                />
              </div>
            )}
          </For>
        </div>
        <div class="py-4"></div>
        <div>
          <div class="text-lg font-semibold mb-3">Ingredients :</div>
          <ul class="list-disc pl-4">
            <For each={props.menu?.content.ingredientLines}>
              {(item) => (
                <li>
                  {item.quantity || ""} {item.unit || ""} {item.ingredient}
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class="py-4"></div>
        <div>
          <div class="text-lg font-semibold mb-3">Preparation Steps :</div>
          <li class="list-decimal">
            {props.menu?.content.preparationSteps}
            <For each={props.menu?.content.preparationSteps}>
              {(item) => <li>{item}</li>}
            </For>
          </li>
        </div>
      </div>
    </>
  );
}

export default MenuDetailPage;
