
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  try {
    fetch('https://api.github.com/graphql', {
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
      .then((response) => response.json()).then(data => {
        return res.status(200).json(data.data.user.pinnedItems.nodes)
      })
    }catch(err) {
      console.log("it was not possible to get the pinned repositories from github" , err);
    }
}
