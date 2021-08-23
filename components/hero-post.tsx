import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PostAuthor } from '../lib/api'

const HeroPost: React.FC<{
  title?: string
  coverImage?: SanityImageSource
  date?: string
  excerpt?: string
  author?: PostAuthor
  slug?: string
}> = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <section>
      <div>
        <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} />
      </div>
      <div>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div>
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p>{excerpt}</p>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
