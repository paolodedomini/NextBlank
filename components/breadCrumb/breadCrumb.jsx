import style from './breadcrumb.module.scss';
import Link from 'next/link'
import { unslugify } from "unslugify";

function BreadCrumb({path, router}){
    const linkPath = router.asPath.split('/')
    linkPath.shift();
    const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: unslugify(path), href: '/' + linkPath.slice(0, i + 1).join('/') };
    });
    return (
        <section className='breadcrumb'>
          <div className={style.breadCrumb}>
              {pathArray.map((item)=>{
                return  <Link key={item.href} href={item.href}>{item.breadcrumb}</Link>})
              }
          </div>
        </section>
    )
}

export default BreadCrumb