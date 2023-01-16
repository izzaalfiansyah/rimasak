export default () => {
  return (
    <>
      <div class="text-2xl font-bold mb-10 text-center">Kontak Kami</div>
      <div class="rounded-xl py-20 flex items-center justify-center relative overflow-hidden p-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
          alt=""
          class="absolute w-full h-full object-cover top-0"
        />
        <div class="lg:w-1/2 relative p-5 rounded-xl backdrop-blur bg-white bg-opacity-50 py-10">
          <input
            type="text"
            class="px-4 p-3 w-full bg-white outline-none rounded-full mb-5"
            placeholder="Email Kamu"
          />
          <textarea
            class="px-4 p-3 w-full bg-white outline-none rounded-xl mb-5 resize-none"
            placeholder="Masukkan Pesan"
            rows={5}
          ></textarea>
          <div class="mt-10">
            <button class="bg-primary rounded-full w-full p-3 text-white">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
