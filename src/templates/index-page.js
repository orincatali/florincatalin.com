import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentWrap from '../components/ContentWrap'
import RecentArticles from '../components/RecentArticles'
import Experiments from '../components/Experiments'
import Heading from '../jh-ui/Heading'
import Spaced from '../jh-ui/Spaced'
import Text from '../jh-ui/Text'
import Link from '../jh-ui/Link'
import SectionHeader from '../jh-ui/SectionHeader'
import ScreenReaderText from '../jh-ui/ScreenReaderText'
import Seo from '../components/seo'

const HeaderWrap = styled.header`
  padding-top: ${({ theme }) => theme.spacing['3x']};
  background-color: var(--backgroundPrimary);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing['4x']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing['5x']};
  }
`

const HomeContentWrap = styled(ContentWrap)`
  padding-top: ${({ theme }) => theme.spacing['3x']};
  padding-bottom: ${({ theme }) => theme.spacing['3x']};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing['4x']};
    padding-bottom: ${({ theme }) => theme.spacing['4x']};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: ${({ theme }) => theme.spacing['5x']};
    padding-bottom: ${({ theme }) => theme.spacing['5x']};
  }
`

const HeaderContentWrap = styled.div`
  max-width: 28rem;
`

const RecentArticlesWrap = styled.section`
  background-color: var(--backgroundSecondary);
`

const ExperimentsWrap = styled.section`
  background-color: var(--backgroundInverse);
`

export const IndexPageTemplate = ({ title, description, experiments }) => {
  return (
    <>
      <Seo/>
      <HeaderWrap aria-labelledby="introduction-label">
        <HomeContentWrap>
          <HeaderContentWrap>
            <Heading level={1} id="introduction-label">
              {title}
            </Heading>
            <Spaced top="m">
              <Text>
                {description}
              </Text>
            </Spaced>
          </HeaderContentWrap>
        </HomeContentWrap>
      </HeaderWrap>
      <RecentArticlesWrap aria-labelledby="recent-articles-label">
        <HomeContentWrap>
          <SectionHeader>
            <Heading level={2} id="recent-articles-label">
              Recent Articles
            </Heading>
            <Link
              to="/blog"
              arrow={true}
              aria-labelledby="view-all-articles-label"
            >
                <span aria-hidden>
                  View all
                </span>
              <ScreenReaderText id="view-all-articles-label">
                View all articles
              </ScreenReaderText>
            </Link>
          </SectionHeader>
          <RecentArticles/>
        </HomeContentWrap>
      </RecentArticlesWrap>
      <ExperimentsWrap aria-labelledby="recent-experiments-label">
        <HomeContentWrap>
          <SectionHeader>
            <Heading level={2} color="textInverse" id="recent-experiments-label">
              Recent Experiments
            </Heading>
            <Link
              href="https://codepen.io/jonathanharrell/"
              target="_blank"
              rel="noopener noreferrer"
              arrow={true}
              aria-labelledby="view-all-experiments-label"
            >
                <span aria-hidden>
                  View all
                </span>
              <ScreenReaderText id="view-all-experiments-label">
                View all experiments
              </ScreenReaderText>
            </Link>
          </SectionHeader>
          <Experiments experiments={experiments}/>
        </HomeContentWrap>
      </ExperimentsWrap>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  experiments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }))
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.mdx

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        experiments={frontmatter.experiments}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    mdx(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        description
        experiments {
          id
          title
          date
        }
      }
    }
  }
`
