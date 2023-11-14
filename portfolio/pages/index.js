import style from '../styles/Home.module.css';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.contacs}>
        <div className={style.imgfoto}></div>
        <div className={style.info}>
          <h1>Falei Alina</h1>
          <p>Based: Republic of Belarus</p>
          <p>Phone: +37529-7771362</p>
          <p>E-mail: august3@mail.ru</p>
        </div>
      </div>

      <div className={style.title}>Work Experience</div>
      <div className={style.job}>
        <div className={style.jobBlock}>
          <h1>Job title</h1>
          <h2>company</h2>
          <h2>time period</h2>
          <p>Describe what your job entailed, what you did at your position.</p>
        </div>
      </div>

      <div className={style.title}>Skills</div>
      <div className={style.skils}>
        <div className={style.block}>
          <p>Wireframing</p>
          <p>Prototyping</p>
          <p>Mobile Application Design</p>
          <p>Responsive Web Design</p>
        </div>
        <div className={style.block}>
          <p>Wireframing</p>
          <p>Prototyping</p>
          <p>Mobile Application Design</p>
          <p>Responsive Web Design</p>
        </div>
      </div>

      <div className={style.educationLanguage}>
        <div className={style.educationBlock}>
          <div className={style.imgEducation}></div>
          <div className={style.education}>
            <h1>Education</h1>
            <p>1. test 1</p>
            <p>2. test 1</p>
          </div>
        </div>
        <div className={style.languageBlock}>
          <div className={style.imgLanguage}></div>
          <div className={style.language}>
            <h1>Language</h1>
            <p>English B1</p>
            <p>Russian C2</p>
          </div>
        </div>
      </div>

    </div>
  )
}