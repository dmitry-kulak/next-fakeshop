import Container from "../Container/Container";
import LinksGroup from "../LinksGroup/LinksGroup";
import QR from "../../icons/QR";

// TODO think of something more clever
const Footer = () => {
  const linksClassname = "text-center md:text-start";
  return (
    <Container as="footer" className="flex flex-col p-5">
      <div className="flex flex-col justify-between md:flex-row">
        <Container className="m-0 w-full text-center shadow md:w-1/4">Placeholder</Container>

        // TODO: Хоть это и не сильно в приоритетах, так как пока это более чем проработка разметки, но потом желательно mock данные для этого завести.
        // По крайней мере, сделать рендер ссылок более декларативным. 
        <div className="mt-4 grid grid-cols-2 justify-items-center md:flex md:flex-wrap md:justify-between md:space-x-5">
          <LinksGroup label="Главный раздел">
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
          </LinksGroup>

          <LinksGroup label="Главный раздел">
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
          </LinksGroup>

          <LinksGroup label="Главный раздел">
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
          </LinksGroup>

          <LinksGroup label="Главный раздел">
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
            <LinksGroup.Link className={linksClassname} href="/">
              Ссылка
            </LinksGroup.Link>
          </LinksGroup>
        </div>

        <div className="self-center">
          <QR />
        </div>
      </div>

      <p className="self-center pt-2.5 text-[10px] text-main-100">Next Fakeshop ©</p>
    </Container>
  );
};

export default Footer;
