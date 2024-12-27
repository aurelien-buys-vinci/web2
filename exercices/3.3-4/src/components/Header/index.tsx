interface HeaderProps {
    image: string;
    children: React.ReactNode;
    theme: string;
    toggleTheme: () => void;
}

const Header = (props: HeaderProps) => {
    return (
        <header className={props.theme}>
            <img src={props.image} alt="logo" width="50"/>
            {props.children}
            <button onClick={props.toggleTheme}>Toggle Theme</button>
        </header>
    );
}
export default Header;