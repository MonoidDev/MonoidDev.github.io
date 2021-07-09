<script>
  import logo from 'images/logo.png';
  import { _ } from 'svelte-i18n';
</script>

<style type="text/postcss">
  img.logo {
    @apply w-96 h-96 self-center;
  }

  section {
    /* @apply flex bg-gray-50 p-12 m-12; */
    min-height: 30vh;

    @apply p-6 overflow-hidden;
  }

  p {
    @apply mb-3;
  }

  .content {
    @apply max-w-5xl mx-auto flex flex-col;
  }

  h1 {
    @apply font-sans text-4xl;
  }

  a:hover {
    @apply text-gray-200;
  }

</style>

<svelte:head>
  <title>G.K. Monoid</title>
</svelte:head>

<section>
  <div class="content">
    <img class="logo" src="{logo}" alt="Monoid Logo" />

    <div class="font-thin text-center text-gray-600 italic font-mono">
      {$_('slogan')}
    </div>
  </div>
</section>

<section
  class="bg-gray-50 relative"
>
  <div class="content p-6">
    <h1>
      Your next partner
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        🌍 Located at Tokyo, Monoid empowers the Internet with creativity and technology.
      </p>
      <p>
        📱 Monoid is a group of creative young people eager to make your world-changing apps for the next era.
      </p>
      <p>
        👌 Monoid listens to customers' voice, designs and creates with advanced skills, only to satisfy your complex and changing needs for your business.
      </p>
    </div>
  </div>
</section>

<section
  class="relative"
>
  <div class="content p-6">
    <h1>
      Our works
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        <a href="https://wopal.dev">
          💪 WOPAL - Team-based training app
        </a>
      </p>

      <p>
        <a href="https://www.polijob.jp/">
          💼 Polijob - Online job platform
        </a>
      </p>

      <p>
        <a href="https://starcharge.com">
          🌟 Starcharge - China's unicorn in EV charging
        </a>
      </p>
      <p>
        <a href="https://wopal.dev">
          🚢 D2D Shipping - International shipping company
        </a>
      </p>
      <p>
        <a href="https://iheal.jp">
          🧘‍♀️ iHeal - Smart aromatherapy and more
        </a>
      </p>
    </div>
  </div>
</section>

<section
  class="bg-gray-50"
>
  <div class="content p-6">
    <h1>
      Contact Us
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        📧 Email: <a href="mailto:ymao@monoidtech.com">ymao@monoidtech.com</a>
      </p>
      <p>
        📱 Phone: 03-3242-3072
      </p>
      <p>
        🏢 Address: 東京都大手町1-7-2 東京サンケイビル 27F
      </p>
    </div>
  </div>
</section>