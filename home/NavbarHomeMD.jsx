import { Col } from "react-bootstrap";

export default function NavbarHomeMD(props) {
  const sezioni = [
    "Manuale",
    "Regolamento",
    "Disclaimer",
    "Ringraziamenti",
    "Gioca",
  ];

  const defaultClass = "clickable text-center py-1 h5";
  const active = defaultClass + " text-rossoSangue bg-biancoSporco rounded";
  const notActive = defaultClass + " hover-text-oroVecchio";

  return (
    <>
      <Col
        md={{ span: 2 }}
        className={defaultClass}
        onClick={() => props.change(0)}
      >
        Logo
      </Col>
      {sezioni.map((item, index) => {
        return (
          <Col
            key={index}
            md={{ span: 2 }}
            xl={{ offset: 1, span: 1 }}
            className={props.selected == index+1 ? active : notActive}
            onClick={() => props.change(index+1)}
          >
            {item}
          </Col>
        );
      })}
    </>
  );
}
