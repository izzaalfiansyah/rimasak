export default () => {
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
          <input
            type="text"
            class="rounded-full w-full bg-white px-5 p-3"
            placeholder="Cari Makanan..."
          />
        </div>
      </div>
    </div>
  );
};
