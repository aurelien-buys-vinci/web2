interface PageTitleProps {
    title: string;
  }

  const PageTitle = (pageTitle: PageTitleProps) => {
    return <h1>{pageTitle.title}</h1>;
  };

  export default PageTitle;