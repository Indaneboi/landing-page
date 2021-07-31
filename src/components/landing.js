import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="land">
        <div className="max-width">
          <div className="header">
            Welcome to
            <br />
            Zenexia Codepad
          </div>

          <div className="footer">
            <button type="submit" className="htm">
              Front-End
            </button>
            <button type="submit" className="pjc">
              Compiler
            </button>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="max-width">
          <div className="title">ABOUT THE CODEPAD</div>
          <div className="content">
            <p>
              Zenexia Codepad is a single-page application made with the help of
              React.js. It is divided into two parts.
            </p>
            <p>
              First part is a basic front-end editor. It enables user to learn
              HTML, CSS and JavaScript with a live preview of the code changes
              in the browser itself. It uses Codemirror API which helps in the
              basic functionality of our code editor.
            </p>
            <p>
              Second is a basic compiler for 4 languages, namely C, C++, Java
              and Python. We can practice basic code snippets with user inputs
              as well. It uses Judge0 API which provides the functionality to
              our compiler.
            </p>
            <div className="quote">
              "Any fool can write code that a computer can understand. Good
              programmers write code that humans can understand." – Martin
              Fowler
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
