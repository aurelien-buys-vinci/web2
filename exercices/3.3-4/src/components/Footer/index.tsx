

interface FooterProps {
    image: string;
    children: React.ReactNode;
    theme: string;
}

const Footer = (props: FooterProps) => {
    return (
        <footer className={props.theme}>
            <img src={props.image} alt="logo" width="50" />
            {props.children}
        </footer>
    );
}
export default Footer;