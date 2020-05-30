import Link from "next/link";
// import Head from 'next/head'

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <a
            href="https://github.com/zews78"
            target="_blank"
            rel="creater"
            >
            Developed by{' '}
            <img src="/favicon.ico" alt="Zews Logo" className="logo" />{' '}
            <span>zews</span>
            </a>
        </footer>
      

      <style>
          {`
          footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          height: 1em;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        `}
      </style>
      </>
    )
}