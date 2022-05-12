import { Helmet } from 'umi'
import { Button } from 'antd'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Button type="primary">Umi</Button>
    </div>
  )
}

export default Home
