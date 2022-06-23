import { gql, useQuery } from '@apollo/client'
import './styles/global.css'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        id
        name
        bio
      }
    }
  }
`

export function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
