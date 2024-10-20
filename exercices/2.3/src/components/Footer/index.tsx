interface FooterProps {
    title: string;
}
const Footer = (footer: FooterProps) => {
    return (
        <footer>{footer.title}</footer>
    );
}
export default Footer;