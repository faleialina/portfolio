import style from '../styles/Home.module.css';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacs}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>Falei Alina</h1>
          <p>FullStack Developer</p>
          <p>Based: Republic of Belarus</p>
          <p>Phone: +37529-7771362</p>
          <p>E-mail: august3@mail.ru</p>
        </div>
      </div>

      <div className={style.title}>Work Experience</div>
      <div className={style.job}>
        <div className={style.jobBlock}>
          <h1>Software Engineer</h1>
          <h2>HSC Technology</h2>
          <h2>1 year</h2>
          <p>Participation in the full development cycle starting from design, logic implementation and testing to the deployment and maintenance.</p>
        </div>
      </div>

      <div className={style.title}>Skills</div>
      <div className={style.skils}>

        <div className={style.block}>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Node.js</p>
          <p>React</p>
        </div>
        <div className={style.block}>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>MySQL</p>
          <p>PostgreSQL</p>
        </div>
        <div className={style.block}>
          <p>SQL</p>
          <p>Redux</p>
          <p>Redux Toolkit</p>
          <p>Git</p>
        </div>
      </div>

      <div className={style.educationLanguage}>
        <div className={style.educationBlock}>
          <div className={style.imgEducation}></div>
          <div className={style.education}>
            <p>Education</p>
            <p>1. Belarusian State Technological University</p>
            <p>2. HSchool</p>
          </div>
        </div>
        <div className={style.languageBlock}>
          <div className={style.imgLanguage}></div>
          <div className={style.language}>
            <p>Language</p>
            <p>English B1</p>
            <p>Russian C2</p>
          </div>
        </div>
      </div>

      <div className={style.portfolio}>
        <div className={style.qr}></div>
        <div className={style.infoPortfolio}>
          <h1>my portfolio on github</h1>
          <a href="https://github.com/faleialina">https://github.com/faleialina</a>
        </div>
      </div>

    </div>
  )
}