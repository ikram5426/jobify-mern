import {Link} from 'react-router-dom'
import error from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={error} alt="page not found" />
        <h3>Ohh! page not found</h3>
        <p>The page you are looking for not found</p>
        <Link to='/'>Go to home</Link>
      </div>
    </Wrapper>
  )
}
export default Error