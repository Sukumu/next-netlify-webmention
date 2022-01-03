import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import PostList from '@components/PostList';

import getPosts from '@utils/getPosts';

const Index = ({ posts, title, description, ...props }) => {
  const [mentions, setMentions] = useState([]);
  useEffect(() => {
    fetch(
           'https://webmention.io/api/mentions.html?token=lWeKyI6a61dVQGfRLWfUpg',  
    )
      .then((response) => response.json())
      .then((result) => {
        setMentions(result.children);
      console.log(result);
      });
  }, []);
  return (
    <>

    
      <Layout pageTitle={title} description={description}>
    
         <script src="https://anvil.works/embed.js" async></script>              

        <h1 className="title">Welcome to this demo blog!</h1>
        <iframe style="width:100%;" data-anvil-embed src="https://Z2WEDKIJP4DIZ3I5.anvil.app/ZB7FMUJN3TTGJ2O544UPCXNW"></iframe>
        <p className="description">
          This is a simple blog built with Next, easily deployable on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>
        <main>
          <PostList posts={posts} />             
        </main>
        <p>
          You can look at the repository for this project{' '}
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            here
          </a>
          , and a tutorial on how to build it {` `}
          <a href="https://url.netlify.com/ByVW0bCF8">here</a>.
        </p>
        <div>
          <h2>Discussion about this site on the web</h2>
          <p>This uses Webmention</p>
      
          {mentions.map((mention) => (
            <div
              style={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: '100px 1fr',
              }}
            >
              <a href={mention.author.url}>
                <img
                  style={{ width: 100 }}
                  src={mention.author.photo}
                  alt={mention.author.name}
                />
              </a>
              {mention.content && (
                <div
                  dangerouslySetInnerHTML={{ __html: mention.content.html }}
                />
              )}         
            
            </div>
          ))}
        </div>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    return getPosts(context);
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
