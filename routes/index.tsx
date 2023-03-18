import { Head } from "$fresh/runtime.ts";
import { css, tw } from "twind/css";

import { Form } from "@/components/Form.tsx";

const cssIcon = css({
  "font-family": "MirkoIcon",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>mirko portfolio</title>
      </Head>

      <div class="p-4 mx-auto max-w-screen-md">
        <section>
          <div class="flex justify-center mt-2">
            {/* XXX: CSSのエラーはあとで直す */}
            <img
              class="bg-white max-w-[80%] rounded-full object-fill border-8 border-secondary"
              src="/profile_image.png"
              alt="mirko-san profile image"
            />
          </div>

          <div class="flex justify-center mt-8">
            <p class="text-4xl">
              <span>ミルコ ( mirko )</span>
              <span class={tw(cssIcon)} className="pl-2">&#xf0000;</span>
            </p>
          </div>

          <div class="flex justify-center mt-4 px-4">
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

        <section class="mb-4">
          <div class="flex justify-center mt-4">
            <div class="inline-block py-2 px-4">
              <a
                href="https://twitter.com/mirko_960"
                target="_blank"
                class="flex items-center"
              >
                {/* https://primer.style/octicons/globe-16 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  class="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 00-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 004.666 5.5 11.13 11.13 0 01-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 01-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 01-.857-1.215A9.637 9.637 0 015.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 011.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0110.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 004.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 00-.353-.552 6.506 6.506 0 014.666 5.5zM8 0a8 8 0 100 16A8 8 0 008 0z"
                  >
                  </path>
                </svg>
                <span class="underline">Twitter</span>
              </a>
            </div>
            <div class="inline-block py-2 px-4 ml-2 underline">
              <a
                href="https://www.youtube.com/channel/UCwoEKcxzNJ_VUW0TPiPfyqw"
                target="_blank"
                class="flex items-center"
              >
                {/* https://primer.style/octicons/globe-16 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  class="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.543 7.25h2.733c.144-2.074.866-3.756 1.58-4.948.12-.197.237-.381.353-.552a6.506 6.506 0 00-4.666 5.5zm2.733 1.5H1.543a6.506 6.506 0 004.666 5.5 11.13 11.13 0 01-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948zm1.504 0h4.44a9.637 9.637 0 01-1.363 4.177c-.306.51-.612.919-.857 1.215a9.978 9.978 0 01-.857-1.215A9.637 9.637 0 015.78 8.75zm4.44-1.5H5.78a9.637 9.637 0 011.363-4.177c.306-.51.612-.919.857-1.215.245.296.55.705.857 1.215A9.638 9.638 0 0110.22 7.25zm1.504 1.5c-.144 2.074-.866 3.756-1.58 4.948-.12.197-.237.381-.353.552a6.506 6.506 0 004.666-5.5h-2.733zm2.733-1.5h-2.733c-.144-2.074-.866-3.756-1.58-4.948a11.738 11.738 0 00-.353-.552 6.506 6.506 0 014.666 5.5zM8 0a8 8 0 100 16A8 8 0 008 0z"
                  >
                  </path>
                </svg>
                <span>Youtube</span>
              </a>
            </div>
            <div class="py-2 px-4 ml-2">
              <a
                href="https://github.com/mirko-san/portfolio-mirko"
                target="_blank"
                class="flex items-center"
              >
                {/* https://primer.style/octicons/mark-github-16 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  class="mr-2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  >
                  </path>
                </svg>
                <span class="underline">Source</span>
              </a>
            </div>
          </div>
        </section>

        <section class="mb-16">
          <Form />
        </section>

        <section class="flex justify-center mt-4">
          <div>
            <a href="https://fresh.deno.dev" target="_bllank">
              <img
                width="197"
                height="37"
                src="https://fresh.deno.dev/fresh-badge.svg"
                alt="Made with Fresh"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
