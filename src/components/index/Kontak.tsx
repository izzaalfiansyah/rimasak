import { createSignal } from "solid-js";

export default () => {
  const [email, setEmail] = createSignal();
  const [message, setMessage] = createSignal();

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();

    const a = document.createElement("a");
    a.href = `mailto:iansyah724@gmail.com?subject=From ${email()}&body=${message()}`;
    a.target = "_blank";

    a.click();

    setTimeout(() => {
      a.remove();
    }, 400);
  }

  return (
    <>
      <div class="text-2xl font-bold mb-10 text-center">Our Contact</div>
      <div class="rounded-xl py-20 flex items-center justify-center relative overflow-hidden p-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
          alt=""
          class="absolute w-full h-full object-cover top-0"
        />
        <form
          onSubmit={handleSubmit}
          class="lg:w-1/2 relative p-5 rounded-xl backdrop-blur bg-white bg-opacity-50 py-10"
        >
          <input
            type="email"
            class="px-4 p-3 w-full bg-white outline-none rounded-full mb-5"
            placeholder="Your Email"
            onInput={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <textarea
            class="px-4 p-3 w-full bg-white outline-none rounded-xl mb-5 resize-none"
            placeholder="Enter Message"
            rows={5}
            onInput={(e) => setMessage(e.currentTarget.value)}
            required
          ></textarea>
          <div class="mt-10">
            <button
              class="bg-primary rounded-full w-full p-3 text-white outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
