import Link from "next/link";
export default function Header(){
    return(
        <>
        <header className="header">
            <div className="navbar">
                E
            </div>
            <Link href="/">
                <h3>MS Handloom</h3>
            </Link>
            <a href='/cart'>
                <span className="cart">U</span>
            </a>


        </header>


        <style jsx>{`
        .navbar{
            height:10px;
            width:10px;
            float:;
            
        }
        .cart{
            float:right;
        }
        .header{
            display:flex;
            flex:wrap;
            width:100%
        }
        `}</style>
        </>
    )
}