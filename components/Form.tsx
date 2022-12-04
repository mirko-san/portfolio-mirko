import { JSX } from "preact";

import { config } from "../src/config.ts";

export function Form(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <h2 class="text-xl mb-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M1.75 3A1.75 1.75 0 000 4.75v14c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0024 18.75v-14A1.75 1.75 0 0022.25 3H1.75zM1.5 4.75a.25.25 0 01.25-.25h20.5a.25.25 0 01.25.25v.852l-10.36 7a.25.25 0 01-.28 0l-10.36-7V4.75zm0 2.662V18.75c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412z"
            >
            </path>
          </svg>
          <span class="ml-2">ご連絡</span>
        </div>
      </h2>

      <div>
        <form
          method="POST"
          action={config.formUrl}
        >
          <div class="pb-2">
            <h4 class="pb-2 text-lg">件名</h4>
            <input
              type="text"
              name="subject"
              placeholder="件名"
              required
              class="w-full px-4 py-2 rounded-lg"
            />
          </div>

          <div class="pb-2">
            <h4 class="pb-2 text-lg">本文</h4>
            <textarea
              name="body"
              placeholder="本文"
              rows="4"
              required
              class="w-full px-4 py-2 rounded-lg"
            />
          </div>

          <div class="pb-2">
            <h4 class="pb-2 text-lg">おなまえ（任意）</h4>
            <input
              type="text"
              name="name"
              placeholder="おなまえ"
              class="w-full px-4 py-2 rounded-lg"
            />
          </div>

          <div class="pb-2 mb-2">
            <h4 class="pb-2 text-lg">折り返しメールアドレス（任意）</h4>
            <input
              type="text"
              name="email"
              placeholder="メールアドレス"
              class="w-full px-4 py-2 rounded-lg"
            />
          </div>

          <div class="flex justify-end">
            <button
              class="px-4 py-2 border(gray-100 2) bg-primary rounded-lg"
              type="submit"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.592 2.712L2.38 7.25h4.87a.75.75 0 110 1.5H2.38l-.788 4.538L13.929 8 1.592 2.712zM.989 8L.064 2.68a1.341 1.341 0 011.85-1.462l13.402 5.744a1.13 1.13 0 010 2.076L1.913 14.782a1.341 1.341 0 01-1.85-1.463L.99 8z"
                  >
                  </path>
                </svg>
                <span class="ml-2">送信</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
