interface HeaderProps {
    image: string;
    children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <img src={props.image} alt="logo" width="50"/>
            {props.children}
        </header>
    );
}
export default Header;