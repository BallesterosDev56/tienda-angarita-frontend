import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      <h2>ERROR 404 PAGE NOT FOUND</h2>
      <Link to={'/'}>Go back</Link>
    </div>
  )
}

export default NotFoundPage
