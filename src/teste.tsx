import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'
import { client } from './lib/apollo'

const GET_LESSONS_QUERY = gql`

  query{ 
    lessons {
    id
    slug
    title
    # teacher{
    #   name
    #   bio
    # 	avatarURL
    # }
   }
  }
`
interface Lesson {
  id: string;
  title: string;


}

function Teste() {
  
  const {data} = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);


  return (

    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}> {lesson.title} </li>
      })}
    </ul>

    )

}

export default Teste