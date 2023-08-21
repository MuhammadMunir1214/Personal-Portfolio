import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headImg from "../assets/img/headImg.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer"];
  const period = 3000;
  console.log(index);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <div className="animated-text">
              <h1>
                {`Hi! I'm Muhammad `}
                <br />
                <span className="wrap">{text}</span>
              </h1>
            </div>
            <p>
              I am a Computer Science student with a passion for creating
              innovative solutions and exploring the world of technology. I am
              on a journey to learn, create, and contribute to the ever-evolving
              field of web development.
            </p>
            <button onClick={() => console.log("connect")}>
              Let’s Connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
