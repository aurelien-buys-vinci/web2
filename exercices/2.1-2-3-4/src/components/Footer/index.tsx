interface FooterProps {
    image: string;
    children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
    return (
        <footer>
            <img src={props.image} alt="logo" width="50" />
            {props.children}
        </footer>
    );
}
export default Footer;