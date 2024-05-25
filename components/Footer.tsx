import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        &#8595; support devloper &#8595;
        <div className="mb-3 flex space-x-4">
          {/*<SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />*/}
          {/*<SocialIcon kind="github" href={siteMetadata.github} size={6} />*/}
          {/*<SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />*/}
          {/*<SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />*/}
          {/*<SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />*/}
          {/*<SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />*/}
          {/*<SocialIcon kind="x" href={siteMetadata.x} size={6} />*/}
          {/*<SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />*/}
          {/*<SocialIcon kind="threads" href={siteMetadata.threads} size={6} /> */}
          <SocialIcon kind="paypal" href={siteMetadata.paypal} size={6} />
          <SocialIcon kind="stripe" href={siteMetadata.stripe} size={6} />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            {`© ${new Date().getFullYear()}`} all ©rights reserved @devonl101 llc
          </Link>
        </div>
      </div>
    </footer>
  )
}
