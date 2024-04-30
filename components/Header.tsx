import siteMetadata from '@/data/siteMetadata'
import Script from 'next/script'
import headerNavLinks from '@/data/headerNavLinks'
import Image from 'next/image'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <link
          rel="apple-touch-icon"
          href="apple-icons.jpg"
          type="image/<generated>"
          sizes="<generated>"
        />
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3 rounded-full">
              {/* <Logo /> */}
              <Image src="/favicon.ico" width={40} height={40} alt="101 logo" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
        <Script
          async
          id="Adsense-id"
          crossOrigin="anonymous"
          strategy="lazyOnload"
          src={
            'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5229295142210026'
          }
        />
      </div>
    </header>
  )
}

export default Header
