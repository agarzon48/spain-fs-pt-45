import { useParams } from 'react-router-dom'

export default function Post() {
    const params = useParams();

  return <h1>This is the # {params.postId} post page!</h1>;
}
