import { goToSection } from "../../libs";

export default () => {
  return (
    <div class="flex items-center justify-between flex-col lg:flex-row">
      <div class="flex items-center justify-center flex-1">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/20/14/36/pizza-2661933_960_720.png"
          alt=""
          class="inline-block lg:h-[500px] lg:w-auto w-[200px] lg:mb-0 mb-10"
        />
      </div>
      <div class="flex-1 lg:text-left text-center">
        <div class="lg:text-2xl text-xl font-bold">
          Healthy Food Provides Various Benefits For The Future
        </div>
        <div class="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          accusamus facilis exercitationem, maxime quis quod voluptatem, laborum
          facere dicta quam nisi. Fuga voluptas atque beatae architecto,
          exercitationem earum velit dolores.
        </div>
        <div class="mt-8">
          <a
            href="#contact"
            class="bg-primary text-white px-10 p-3 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              goToSection("#contact");
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
