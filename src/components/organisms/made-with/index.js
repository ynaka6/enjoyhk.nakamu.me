import React from "react"
import Image from "@components/atoms/image";
import Title from "@components/atoms/title"

const MadeWith = () => (
  <div className="w-full">
    <div className="container">
      <Title title="Made with" subtitle="このサイトは以下の技術を利用して作られています" />

      <div className="my-4 p-4">
        <div className="mb-4">
          <h2 className="flex items-center text-3xl font-bold">
            <div
              className="mr-4"
              style={{ width: `40px` }}
            >
              <Image filename="gatsby-icon.png" alt="GatsbyJS"　/>
            </div>
            <span>GasbyJS</span>
          </h2>
          <p className="py-2">
            React.jsで構築された静的ジェネレーターの<a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              GasbyJS
            </a>を、本ブログの基本構成として利用して構築しています。
          </p>
          <div
              className="w-full mb-10"
            >
              <Image filename="gatsby-screenshot.png" alt="GatsbyJS"　/>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="flex items-center text-3xl font-bold">
            <div
              className="mr-4"
              style={{ width: `40px` }}
            >
              <Image filename="tailwind-icon.png" alt="TailwindCSS"　/>
            </div>
            <span>TailwindCSS</span>
          </h2>
          <p className="py-2">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              TailwindCSS
            </a>は、WebサイトのUIを構築する際の手助けとなるCSSフレームワークです。本ブログのUIはTailwindCSSで構築されています。
          </p>
          <div
              className="w-full mb-10"
            >
              <Image filename="tailwind-screenshot.png" alt="TailwindCSS"　/>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="flex items-center text-3xl font-bold">
            <div
              className="mr-4"
              style={{ width: `40px` }}
            >
              <Image filename="netlify-icon.png" alt="Netlify"　/>
            </div>
            <span>Netlify</span>
          </h2>
          <p className="py-2">
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Netlify
            </a>は、静的コンテンツをホスティングすることができるWebサービスです。無料枠が用意されているためスモールサービスや個人サービスに多く利用されています。
          </p>
          <div
              className="w-full mb-10"
            >
              <Image filename="netlify-screenshot.png" alt="Netlify"　/>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MadeWith
