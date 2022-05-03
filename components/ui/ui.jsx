import style from './ui.module.scss'
import Link from 'next/link'
function ReadMore({text, link}) {
  return (
  <Link href={link}><a className={style.readMore}>{text}</a></Link>
  )
}

function GoToPageButton ({text, link}){
return    <Link href={link}><div className={style.gotopage}>{text}</div></Link>
}

ReadMore.defaultProps = {
  text:'Read More',
  link: "#"
};
GoToPageButton.defaultProps = {
  link: "#",
  text: "Go to page"
};

export {ReadMore, GoToPageButton}