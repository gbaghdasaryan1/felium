import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnOutsideClick";
import classes from './LanguageSelect.module.scss'


const LanguageSelect = () => {

  const router = useRouter();
  const lang = router.locales!;
  const [open,setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  return(
    <div className={classes.LanguageSelect}>
      <span onClick={() => setOpen(!open)}>{router.locale?.toLocaleUpperCase()}</span>
      <ul ref={ref}>
        {
          open && lang.map((item,idx) => {
            return <Link  href={router.asPath} locale={item} key={idx}>{item.toLocaleUpperCase()}</Link>
          })
        }
      </ul>
    </div>
  )
};

export default LanguageSelect;