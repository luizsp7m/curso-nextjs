import style from '../../styles/Header.module.css'

export default function Header({ title = "Curso NextJS", }) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h4 className={style.title}>{title}</h4>

        <div className={style.navbar}>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </div>

        <div className={style.burger}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}