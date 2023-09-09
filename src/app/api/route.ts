import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const token = process.env.GITHUB_TOKEN;

    const res = await fetch('https://api.github.com/graphql', {
      method: 'post',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query:  `query {
          user(login: "nthbaldez") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  createdAt
                  updatedAt
                  repositoryTopics(first: 4) {
                    edges {
                      node {
                        topic {
                          id
                          name
                        }
                      }
                    }
                  } 
                }
              }
            }
          }
        }`
      })
    })

    const data = await res.json()
    const result = data.data.user.pinnedItems.nodes

    return NextResponse.json(result)
  } catch(err) {
    console.log("it was not possible to get the pinned repositories from github" , err)
  }
}
