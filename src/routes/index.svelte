<script>
  import logo from 'images/logo.png';
  import { fade } from 'svelte/transition';

  import { _ } from 'svelte-i18n';
  import { i } from '../stores/i18n';

</script>

<style type="text/postcss">
  img.logo {
    @apply self-center;
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

  a.email {
    text-decoration: underline;
  }

</style>

<svelte:head>
  <title>{$_('companyName')}</title>
</svelte:head>

<section transition:fade="{{ duration: 300 }}">
  <div class="content">
    <img class="logo" height={384} width={384} src="{logo}" alt="Monoid Logo" />

    <div class="font-thin text-center text-gray-600 italic font-mono">
      {$_('slogan')}
    </div>
  </div>
</section>

<section
  class="bg-gray-50 relative"
  transition:fade="{{ duration: 300 }}"
>
  <div class="content p-6">
    <h1>
      {$i({
        en: 'Your next partner',
        'zh-cn': '您值得合作的伙伴',
      })}
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        🌍
        {$i({
          en: 'Located in Tokyo, Monoid empowers the Internet with creativity and technology.',
          'zh-cn': 'Monoid 位于东京，是一家充满创意和科技的互联网创业公司。',
        })}
      </p>
      <p>
        📱
        {$i({
          en: 'Monoid is a group of creative young people eager to make your world-changing apps for the next era.',
          'zh-cn': '我们时刻为了编写下一个改变世界的 App 准备着。',
        })}
      </p>
      <p>
        👌
        {$i({
          en: 'Monoid listens to customer\'s voice, designs and creates with advanced skills, only to satisfy your complex and changing needs for your business.',
          'zh-cn': '我们聆听客户的声音，用卓越的技能设计和实现复杂而多变的商业软件。',
        })}
      </p>
    </div>
  </div>
</section>

<section
  class="relative"
  transition:fade="{{ duration: 300 }}"
>
  <div class="content p-6">
    <h1>
      {$i({
        en: 'Our works',
        'zh-cn': '我们的作品',
      })}
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        <a href="https://wopal.dev">
          💪 WOPAL -
          {$i({
            en: 'Team-based training app',
            'zh-cn': '面向东京大学等日本高校运动队的训练 App。',
          })}
        </a>
      </p>

      <p>
        <a href="https://www.polijob.jp/">
          💼 Polijob -
          {$i({
            en: 'Online job platform',
            'zh-cn': '在线招聘平台',
          })}
        </a>
      </p>

      <p>
        <a href="https://starcharge.com">
          🌟 Starcharge - 
          {$i({
            en: 'China\'s unicorn in EV charging',
            'zh-cn': '中国的新能源独角兽',
          })}
        </a>
      </p>
      <p>
        <a href="https://wopal.dev">
          🚢 D2D Shipping -
          {$i({
            en: 'International shipping company',
            'zh-cn': '中日国际物流公司',
          })}
        </a>
      </p>
      <p>
        <a href="https://iheal.jp">
          🧘‍♀️ iHeal -
          {$i({
            en: 'Smart aromatherapy and more',
            'zh-cn': '智能香氛',
          })}
        </a>
      </p>
    </div>
  </div>
</section>

<section
  class="bg-gray-50"
  transition:fade="{{ duration: 300 }}"
>
  <div class="content p-6">
    <h1>
      {$i({
        en: 'Contact',
        'zh-cn': '联系我们',
      })}
    </h1>
    
    <div
      class="m-6 text-gray-700"
    >
      <p>
        📧 Email: <a class="email" href="mailto:ymao@monoidtech.com">ymao@monoidtech.com</a>
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
