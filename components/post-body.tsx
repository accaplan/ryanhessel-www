import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import styled from 'styled-components'

const PostBody: React.FC<{ content: unknown }> = ({ content }) => {
  return (
    <PostWrapStyle>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </PostWrapStyle>
  )
}

const PostWrapStyle = styled.div`
  margin: 0 auto;
  max-width: 30rem;
`

export default PostBody
