import './App.css';

function App() {
  return (
<body>
    {/* <!-- Navbar --> */}
    <nav class="relative container mx-auto p-6">
      {/* <!-- Flex container --> */}
      <div class="flex items-center justify-between">
        {/* <!-- Logo --> */}
        <div class="pt-2">
          <img src="img/logo.svg" alt="" />
        </div>
        {/* <!-- Menu Items --> */}
        <div class="hidden space-x-6 md:flex">
          <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" class="hover:text-darkGrayishBlue">Product</a>
          <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" class="hover:text-darkGrayishBlue">Community</a>
        </div>
        {/* <!-- Button --> */}
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >Get Started</a
        >

        {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>

    {/* <!-- Hero Section --> */}
    <section id="hero">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        {/* <!-- Left item --> */}
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
            Bring everyone together to build better products
          </h1>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div>
        </div>
        {/* <!-- Image --> */}
        <div class="md:w-1/2">
          <img src="./components/assets/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>

    {/* <!-- Features Section --> */}
    <section id="features">
      {/* <!-- Flex container --> */}
      <div
        class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        {/* <!-- What's Different --> */}
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* <!-- Numbered List --> */}
        <div class="flex flex-col space-y-8 md:w-1/2">
          {/* <!-- List Item 1 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p class="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way done to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

          {/* <!-- List Item 2 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          {/* <!-- List Item 3 --> */}
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* <!-- Heading --> */}
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Testimonials --> */}
    <section id="testimonials">
      {/* <!-- Container to heading and testm blocks --> */}
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* <!-- Heading --> */}
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* <!-- Testimonials Container --> */}
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- Testimonial 1 --> */}
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </section>

    {/* <!-- CTA Section --> */}
    <section id="cta" class="bg-brightRed">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
        {/* <!-- Heading --> */}
        <h2
          class="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Simplify how your team works today
        </h2>
        {/* <!-- Button --> */}
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</a
          >
        </div>
      </div>
    </section>

    {/* <!-- Footer --> */}
    <footer class="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div
        class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        {/* <!-- Logo and social links container --> */}
        <div
          class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div class="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <img src="img/logo-white.svg" class="h-8" alt="" />
          </div>
          {/* <!-- Social Links Container --> */}
          <div class="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="#">
              <img src="img/icon-facebook.svg" alt="" class="h-8" />
            </a>
            {/* <!-- Link 2 --> */}
            <a href="#">
              <img src="img/icon-youtube.svg" alt="" class="h-8" />
            </a>
            {/* <!-- Link 3 --> */}
            <a href="#">
              <img src="img/icon-twitter.svg" alt="" class="h-8" />
            </a>
            {/* <!-- Link 4 --> */}
            <a href="#">
              <img src="img/icon-pinterest.svg" alt="" class="h-8" />
            </a>
            {/* <!-- Link 5 --> */}
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" class="h-8" />
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div class="flex justify-around space-x-32">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Home</a>
            <a href="#" class="hover:text-brightRed">Pricing</a>
            <a href="#" class="hover:text-brightRed">Products</a>
            <a href="#" class="hover:text-brightRed">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-brightRed">Careers</a>
            <a href="#" class="hover:text-brightRed">Community</a>
            <a href="#" class="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div class="flex flex-col justify-between">
          <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>

    <script src="js/script.js"></script>
  </body>
  );
}

export default App;
