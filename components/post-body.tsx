/* eslint-disable react/display-name */
import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react'
import { FadeIn } from './FadeIn'

const serializers = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    block: (props: any) => {
      const ref = useRef()

      return (
        <FadeIn>
          <p ref={ref}>{props.children}</p>
        </FadeIn>
      )
    },
  },
}

const PostBody: React.FC<{ content: unknown }> = ({ content }) => {
  return (
    <PostWrapStyle>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
        serializers={serializers}
      />
    </PostWrapStyle>
  )
}

const PostWrapStyle = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
  }
`

export default PostBody
