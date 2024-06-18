import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+375445355582'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +375 (44) 53-55-582
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='artemstasks@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/temsvs'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='https://vk.com' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}

export default ContactsListItems
