import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw'}}>
      ad adasd asdsad asdsad ad asdsa das dsad asd asd ad asd a da da
    </p>
  </Layout>
)

export default withRouter(Post);