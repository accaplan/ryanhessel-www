import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import { imageBuilder } from '../lib/sanity'
import styled from 'styled-components'
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <PostTitleStyle>
      <PostTitle>{title}</PostTitle>
      <MobileAuthor>
        <Avatar name={author?.name} picture={author?.picture} />
      </MobileAuthor>

      {coverImage && <CoverImage title={title} imageObject={coverImage} url={coverImage} />}

      <div>
        <DesktopAuthor>
          <Avatar name={author?.name} picture={author?.picture} />
        </DesktopAuthor>
        <Date dateString={date} />
      </div>
    </PostTitleStyle>
  )
}

const PostTitleStyle = styled.div`
  padding: 1rem;
`

const MobileAuthor = styled.div`
  display: block;

  @media (min-width: 758px) {
    display: none;
  }
`
const DesktopAuthor = styled.div`
  display: none;

  @media (min-width: 758px) {
    display: block;
  }
`
