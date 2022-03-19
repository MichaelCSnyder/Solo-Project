import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">The World Needs To Hear This</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://images.unsplash.com/photo-1554477717-cad0b36509e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImage" />
        </div>
    )
}