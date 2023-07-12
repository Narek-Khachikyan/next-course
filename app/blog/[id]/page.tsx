import { Metadata } from 'next';

type Props = {
   params: {
      id: string;
   };
};
export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
   const post = await getData(id);
   return {
      title: post.title,
   };
}

async function getData(id: string) {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      next: {
         revalidate: 60,
      },
   });
   return response.json();
}

const Post = async ({ params: { id } }: Props) => {
   const post = await getData(id);
   return (
      <div>
         <h2 className="text-2xl mb-2 text-center">{post.title}</h2>
         <p className="text-center">{post.body}</p>
      </div>
   );
};

export default Post;
