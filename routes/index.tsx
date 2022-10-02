import { css, tw } from "twind/css";

const cssIcon = css({
  "font-family": "MirkoIcon",
});

export default function Home() {
  return (
    <div className="p-4 mx-auto max-w-screen-md">
      <h2 className="text-5xl text-center mt-8">Profile</h2>
      <section>
        <div className="flex justify-center mt-8">
          {/* XXX: CSSのエラーはあとで直す */}
          <img
            className="bg-white max-w-[80%] rounded-full object-fill border-8 border-secondary"
            src="/profile_image.png"
            alt="mirko-san profile image"
          />
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-5xl">
            <span>ミルコ ( mirko )</span>
            <span class={tw(cssIcon)} className="pl-2">&#xf0000;</span>
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <ul className="list-disc">
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
        <div className="flex justify-center mt-4">
          {/* XXX: CSSのエラーはあとで直す */}
          <div className="bg-primary rounded inline-block py-2 px-4">
            <a href="https://twitter.com/mirko_960" target="_blank">Twitter</a>
          </div>
          {/* XXX: CSSのエラーはあとで直す */}
          <div className="bg-secondary rounded inline-block py-2 px-4 ml-2">
            <a
              href="https://www.youtube.com/channel/UCwoEKcxzNJ_VUW0TPiPfyqw"
              target="_blank"
            >
              Youtube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
