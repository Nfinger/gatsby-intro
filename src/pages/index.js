import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import Insta from '../components/insta';
import usePosts from '../hooks/use-posts';

export default () => {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my posts</h2>
        {posts.map(post => (
          <PostPreview keys={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  )
};
