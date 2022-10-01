import { Head } from "$fresh/src/runtime/head.ts";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Head>
        <link rel="stylesheet" href="/main.css" />
      </Head>

      <h2 class="text-5xl text-center mt-8">Profile</h2>
      <section>
        <div class="flex justify-center mt-8">
          <img
            class="bg-white max-w-[80%] rounded-full object-fill border-8 border-secondary"
            src="/profile_image.png"
            alt="mirko-san profile image"
          />
        </div>

        <div class="flex justify-center mt-8">
          <p class="text-5xl">
            <span>ミルコ ( mirko )</span>
            <span class="mirko-icon pl-2">&#xf0000;</span>
          </p>
        </div>

        <div class="flex justify-center mt-4">
          <ul class="list-disc">
            <li>
              <span>セルフ受肉勢の VTuber です。</span>
            </li>
            <li>
              <span>普段はフロントエンドエンジニアとして働いています。</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div class="flex justify-center mt-4">
          <div class="bg-primary rounded inline-block py-2 px-4">
            <a href="https://twitter.com/mirko_960">Twitter</a>
          </div>
          <div class="bg-secondary rounded inline-block py-2 px-4 ml-2">
            <a href="https://www.youtube.com/channel/UCwoEKcxzNJ_VUW0TPiPfyqw">
              Youtube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
